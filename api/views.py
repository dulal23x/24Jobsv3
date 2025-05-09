from django.shortcuts import render
from rest_framework import viewsets, status, pagination
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.db.models import Q
from .models import Company, Person, Job
from .serializers import (
    CompanySerializer, PersonSerializer, PersonResponseSerializer,
    ContactUnlockSerializer, ConnectionRequestSerializer, JobSerializer
)

class StandardResultsSetPagination(pagination.PageNumberPagination):
    page_size = 10
    page_size_query_param = 'pageSize'
    max_page_size = 50

    def get_paginated_response(self, data):
        return Response({
            'pagination': {
                'page': self.page.number,
                'pageSize': self.page.paginator.per_page,
                'total': self.page.paginator.count,
                'totalPages': self.page.paginator.num_pages,
                'hasNextPage': self.page.has_next(),
                'hasPrevPage': self.page.has_previous(),
            },
            'data': data
        })

class CompanyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class PersonViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = PersonResponseSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        queryset = Person.objects.all()
        keyword = self.request.query_params.get('keyword', None)
        sortBy = self.request.query_params.get('sortBy', None)

        if keyword:
            queryset = queryset.filter(
                Q(first_name__icontains=keyword) |
                Q(last_name__icontains=keyword) |
                Q(title__icontains=keyword) |
                Q(company_name__icontains=keyword) |
                Q(city__icontains=keyword) |
                Q(state__icontains=keyword) |
                Q(country__icontains=keyword)
            )

        if sortBy == 'name':
            queryset = queryset.order_by('first_name', 'last_name')
        elif sortBy == 'company':
            queryset = queryset.order_by('company_name')
        elif sortBy == 'location':
            queryset = queryset.order_by('country', 'state', 'city')
        else:
            queryset = queryset.order_by('id')

        return queryset

    @action(detail=False, methods=['post'], url_path='contacts/unlock', serializer_class=ContactUnlockSerializer, permission_classes=[AllowAny])
    def unlock_contact(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            person_id = serializer.validated_data['personId']
            try:
                person = Person.objects.get(pk=person_id)
                person.is_unlocked = True
                person.save()
                response_data = {
                    'id': person.id,
                    'email': person.email,
                    'phone': person.phone,
                    'isUnlocked': person.is_unlocked
                }
                return Response(response_data, status=status.HTTP_200_OK)
            except Person.DoesNotExist:
                return Response({"error": "Person not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'], url_path='connections', serializer_class=ConnectionRequestSerializer, permission_classes=[AllowAny])
    def create_connection(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            person_id = serializer.validated_data['personId']
            try:
                person = Person.objects.get(pk=person_id)
                if person.connect_status == 'none':
                    person.connect_status = 'pending'
                    person.save()
                response_data = {
                    'id': person.id,
                    'connectStatus': person.connect_status
                }
                return Response(response_data, status=status.HTTP_200_OK)
            except Person.DoesNotExist:
                return Response({"error": "Person not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class JobViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = JobSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        queryset = Job.objects.all()
        params = self.request.query_params
        keyword = params.get('keyword')
        location = params.get('location')
        job_type = params.getlist('jobType')
        experience = params.getlist('experience')
        salary = params.getlist('salary')
        work_type = params.getlist('workType')

        if keyword:
            queryset = queryset.filter(title__icontains=keyword)
        if location:
            queryset = queryset.filter(location__icontains=location)
        if job_type:
            queryset = queryset.filter(job_type__in=job_type)
        if experience:
            queryset = queryset.filter(experience_level__in=experience)
        if salary:
            queryset = queryset.filter(salary__in=salary)
        if work_type:
            queryset = queryset.filter(type__in=work_type)
        return queryset
