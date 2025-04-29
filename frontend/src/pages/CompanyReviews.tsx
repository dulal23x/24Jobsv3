import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Star } from 'lucide-react';

const CompanyReviews = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // মক ডাটা - এখানে API থেকে ডাটা আসবে
  const companies = [
    {
      id: 1,
      name: "টেক সলিউশনস বাংলাদেশ",
      logo: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 4.5,
      reviews: 234,
      description: "সফটওয়্যার ডেভেলপমেন্ট ও আইটি সার্ভিসেস",
      featured_review: "একটি অসাধারণ কাজের পরিবেশ, দারুণ সহকর্মী এবং প্রফেশনাল গ্রোথের জন্য অনেক সুযোগ।"
    },
    {
      id: 2,
      name: "গ্রামীণ ফিনটেক",
      logo: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 4.2,
      reviews: 186,
      description: "ফিনান্সিয়াল টেকনোলজি সার্ভিসেস",
      featured_review: "ইনোভেটিভ প্রোডাক্ট এবং কাস্টমার কেন্দ্রিক পরিবেশে কাজ করার সুযোগ।"
    },
    {
      id: 3,
      name: "বাংলা ই-কমার্স",
      logo: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 3.8,
      reviews: 127,
      description: "অনলাইন রিটেইল ও ই-কমার্স",
      featured_review: "দ্রুত বর্ধনশীল কোম্পানি, কিন্তু কখনও কখনও কাজের চাপ বেশি হয়।"
    },
    {
      id: 4,
      name: "মেডিকেয়ার টেক",
      logo: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 4.7,
      reviews: 95,
      description: "হেলথকেয়ার টেকনোলজি সমাধান",
      featured_review: "সমাজে ইতিবাচক প্রভাব ফেলতে পারা এবং উন্নত জীবন যাপনের সুবিধা।"
    },
  ];
  
  const filteredCompanies = companies.filter(company => 
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">কোম্পানি রিভিউ</h1>
        <div className="mb-8">
          <div className="flex gap-4 max-w-xl">
            <Input 
              placeholder="কোম্পানির নাম খুঁজুন..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Button>খুঁজুন</Button>
          </div>
        </div>
        
        <div className="space-y-6">
          {filteredCompanies.map((company) => (
            <Card key={company.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={company.logo} />
                  <AvatarFallback>{company.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl">{company.name}</CardTitle>
                  <CardDescription>{company.description}</CardDescription>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(company.rating) ? 'text-yellow-500' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="ml-2 text-sm">{company.rating} ({company.reviews} রিভিউ)</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="border-l-4 border-gray-200 pl-4 italic">
                  "{company.featured_review}"
                </blockquote>
              </CardContent>
              <CardFooter>
                <Button variant="outline">সমস্ত রিভিউ দেখুন</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
  );
};

export default CompanyReviews; 