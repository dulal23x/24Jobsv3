import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { 
  Search, MapPin, Download, Mail, Phone, Briefcase, Building,
  SlidersHorizontal, Star, X, ChevronDown, ChevronLeft, Filter,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext'; // Import your auth hook
import { toast } from 'sonner'; // Example: using sonner for notifications

// Mock data for demonstration purposes
const MOCK_PEOPLE = [
  {
    id: 1,
    firstName: "John",
    lastName: "Lewis",
    position: "Chief Marketing Officer",
    company: "Acme Inc",
    location: "New York, NY, USA",
    email: { hidden: "@johnlewis.co.uk", full: "john@johnlewis.co.uk" },
    phone: { hidden: "077-646-XXXX", full: "077-646-8822" },
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    connections: 320,
    social: {
      linkedin: "johnlewis",
      twitter: "johnlewis"
    }
  },
  {
    id: 2,
    firstName: "Sarah",
    lastName: "Johnson",
    position: "Software Engineer",
    company: "Tech Solutions",
    location: "San Francisco, CA, USA",
    email: { hidden: "@gmail.com", full: "sarahjohnson@gmail.com" },
    phone: { hidden: "415-555-XXXX", full: "415-555-9876" },
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    connections: 245,
    social: {
      linkedin: "sarahjohnson",
      twitter: "sjohnson"
    }
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Chen",
    position: "Product Manager",
    company: "Innovate Labs",
    location: "Austin, TX, USA",
    email: { hidden: "@innovatelabs.com", full: "mchen@innovatelabs.com" },
    phone: { hidden: "512-333-XXXX", full: "512-333-7654" },
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    connections: 189,
    social: {
      linkedin: "michaelchen",
      twitter: "mikechen"
    }
  },
  {
    id: 4,
    firstName: "Emma",
    lastName: "Garcia",
    position: "UX Designer",
    company: "Creative Design Co",
    location: "Chicago, IL, USA",
    email: { hidden: "@creativedesign.co", full: "emma@creativedesign.co" },
    phone: { hidden: "312-444-XXXX", full: "312-444-5432" },
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    connections: 276,
    social: {
      linkedin: "emmagarcia",
      twitter: "designemma"
    }
  },
  {
    id: 5,
    firstName: "David",
    lastName: "Smith",
    position: "Sales Director",
    company: "Global Sales Inc",
    location: "London, UK",
    email: { hidden: "@globalsales.com", full: "dsmith@globalsales.com" },
    phone: { hidden: "020-7946-XXXX", full: "020-7946-3210" },
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    connections: 412,
    social: {
      linkedin: "davidsmith",
      twitter: "dsmith"
    }
  },
];

// Mock data for companies
const MOCK_COMPANIES = [
  {
    id: 1,
    name: "Acme Inc",
    industry: "Technology",
    size: "500-1000 employees",
    location: "New York, NY, USA",
    founded: 2005,
    revenue: "$50M-100M",
    website: "acmeinc.com",
    description: "Leading provider of innovative technology solutions",
    logo: "https://ui-avatars.com/api/?name=Acme+Inc&background=0062E6&color=fff&size=70",
    keyPeople: ["John Lewis", "Maria Rodriguez"],
    contactInfo: {
      email: { hidden: "@acmeinc.com", full: "contact@acmeinc.com" },
      phone: { hidden: "212-555-XXXX", full: "212-555-1234" }
    }
  },
  {
    id: 2,
    name: "Tech Solutions",
    industry: "Software Development",
    size: "100-500 employees",
    location: "San Francisco, CA, USA",
    founded: 2012,
    revenue: "$10M-50M",
    website: "techsolutions.com",
    description: "Custom enterprise software development and consulting",
    logo: "https://ui-avatars.com/api/?name=Tech+Solutions&background=4CAF50&color=fff&size=70",
    keyPeople: ["Sarah Johnson", "Alex Kim"],
    contactInfo: {
      email: { hidden: "@techsolutions.com", full: "info@techsolutions.com" },
      phone: { hidden: "415-555-XXXX", full: "415-555-9876" }
    }
  },
  {
    id: 3,
    name: "Innovate Labs",
    industry: "Research & Development",
    size: "50-100 employees",
    location: "Austin, TX, USA",
    founded: 2015,
    revenue: "$5M-10M",
    website: "innovatelabs.com",
    description: "Cutting-edge research in AI and machine learning applications",
    logo: "https://ui-avatars.com/api/?name=Innovate+Labs&background=FF5722&color=fff&size=70",
    keyPeople: ["Michael Chen", "Lisa Wong"],
    contactInfo: {
      email: { hidden: "@innovatelabs.com", full: "hello@innovatelabs.com" },
      phone: { hidden: "512-333-XXXX", full: "512-333-7654" }
    }
  },
  {
    id: 4,
    name: "Creative Design Co",
    industry: "Design Services",
    size: "10-50 employees",
    location: "Chicago, IL, USA",
    founded: 2018,
    revenue: "$1M-5M",
    website: "creativedesign.co",
    description: "Award-winning UI/UX design studio for digital products",
    logo: "https://ui-avatars.com/api/?name=Creative+Design+Co&background=9C27B0&color=fff&size=70",
    keyPeople: ["Emma Garcia", "James Wilson"],
    contactInfo: {
      email: { hidden: "@creativedesign.co", full: "design@creativedesign.co" },
      phone: { hidden: "312-444-XXXX", full: "312-444-5432" }
    }
  },
  {
    id: 5,
    name: "Global Sales Inc",
    industry: "Business Services",
    size: "1000+ employees",
    location: "London, UK",
    founded: 1998,
    revenue: "$100M-500M",
    website: "globalsales.com",
    description: "International sales consulting and business development",
    logo: "https://ui-avatars.com/api/?name=Global+Sales+Inc&background=F44336&color=fff&size=70",
    keyPeople: ["David Smith", "Claire Bennett"],
    contactInfo: {
      email: { hidden: "@globalsales.com", full: "sales@globalsales.com" },
      phone: { hidden: "020-7946-XXXX", full: "020-7946-3210" }
    }
  },
];

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  company: string;
  location: string;
  email: { hidden: string; full: string };
  phone: { hidden: string; full: string };
  avatar: string;
  connections: number;
  social: {
    linkedin: string;
    twitter: string;
  };
}

interface Company {
  id: number;
  name: string;
  industry: string;
  size: string;
  location: string;
  founded: number;
  revenue: string;
  website: string;
  description: string;
  logo: string;
  keyPeople: string[];
  contactInfo: {
    email: { hidden: string; full: string };
    phone: { hidden: string; full: string };
  };
}

// --- Filter State Interface ---
interface Filters {
  // Define keys matching your backend query parameters
  name_query: string; // e.g., search term for name/title/company
  location_query: string;
  title_query: string;
  company_query: string;
  industry_query: string;
  skills_query: string;
  // Add others: e.g., min_employees, max_employees, revenue_min, etc.
}

export default function People() {
  const [activeTab, setActiveTab] = useState<'people' | 'companies'>('people');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [filters, setFilters] = useState<Partial<Filters>>({}); // Use Partial for optional filters
  const [activeFilterBadges, setActiveFilterBadges] = useState<{ key: keyof Filters; value: string }[]>([]);

  // --- Data States (Initially empty, fetched via API) ---
  const [peopleResults, setPeopleResults] = useState<Person[]>(MOCK_PEOPLE); // Replace MOCK_PEOPLE with []
  const [companyResults, setCompanyResults] = useState<Company[]>(MOCK_COMPANIES); // Replace MOCK_COMPANIES with []
  const [totalPeopleCount, setTotalPeopleCount] = useState(0); // For displaying total results
  const [totalCompanyCount, setTotalCompanyCount] = useState(0);

  // --- Interaction States ---
  const [connectedPeople, setConnectedPeople] = useState<Set<number>>(new Set());
  const [showContactInfo, setShowContactInfo] = useState<Record<number, boolean>>({}); // Use Record for individual unlock status
  const [followedCompanies, setFollowedCompanies] = useState<Set<number>>(new Set());
  const [showCompanyInfo, setShowCompanyInfo] = useState<Record<number, boolean>>({});

  const { user, updateLocalCredits } = useAuth(); // Get user data and update function from context

  // --- API Fetching State (Example with react-query - install @tanstack/react-query) ---
  // const { data: apiData, isLoading, error, refetch } = useQuery({
  //   queryKey: ['searchResults', activeTab, filters], // Key includes filters to trigger refetch
  //   queryFn: async () => {
  //     const endpoint = activeTab === 'people' ? '/api/people/' : '/api/companies/';
  //     const params = new URLSearchParams(filters as Record<string, string>).toString();
  //     const response = await fetch(`${endpoint}?${params}`); // Replace with your API base URL
  //     if (!response.ok) throw new Error('Network response was not ok');
  //     return response.json();
  //   },
  //   enabled: false, // Initially disable query, trigger manually or on filter change
  // });

  // --- Effect to Update Results from API Data (Example) ---
  // useEffect(() => {
  //   if (apiData) {
  //     if (activeTab === 'people') {
  //       setPeopleResults(apiData.results || []); // Adjust based on your API response structure
  //       setTotalPeopleCount(apiData.count || 0);
  //     } else {
  //       setCompanyResults(apiData.results || []);
  //       setTotalCompanyCount(apiData.count || 0);
  //     }
  //   }
  // }, [apiData, activeTab]);

  // --- Effect to Update Badges when Filters Change ---
  useEffect(() => {
    const badges = Object.entries(filters)
      .filter(([, value]) => value !== "" && value !== undefined && value !== null)
      .map(([key, value]) => ({ key: key as keyof Filters, value: String(value) }));
    setActiveFilterBadges(badges);
  }, [filters]);

  // --- Handlers ---
  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    // Optional: Trigger API refetch here if not using a separate Apply button
    // refetch();
  };

  const clearFilter = (key: keyof Filters) => {
    setFilters((prev) => {
      const newFilters = { ...prev };
      delete newFilters[key]; // Remove the key entirely
      return newFilters;
    });
    // Optional: Trigger API refetch
    // refetch();
  };

  const clearAllFilters = () => {
    setFilters({});
    // Optional: Trigger API refetch
    // refetch();
  };

  const handleApplyFilters = () => {
    // Manually trigger the API refetch if needed
    // refetch();
    console.log("Applying filters:", filters);
    // For mock data: Apply filters directly (as done in previous example's useEffect)
    // --- MOCK FILTERING LOGIC START ---
    let people = MOCK_PEOPLE.filter(p =>
        (!filters.name_query || `${p.firstName} ${p.lastName}`.toLowerCase().includes(filters.name_query.toLowerCase())) &&
        (!filters.location_query || p.location.toLowerCase().includes(filters.location_query.toLowerCase())) &&
        (!filters.title_query || p.position.toLowerCase().includes(filters.title_query.toLowerCase())) &&
        (!filters.company_query || p.company.toLowerCase().includes(filters.company_query.toLowerCase()))
        // Add other filter checks
    );
    setPeopleResults(people);
    setTotalPeopleCount(people.length);

     let companies = MOCK_COMPANIES.filter(c =>
        (!filters.company_query || c.name.toLowerCase().includes(filters.company_query.toLowerCase())) &&
        (!filters.location_query || c.location.toLowerCase().includes(filters.location_query.toLowerCase())) &&
        (!filters.industry_query || c.industry.toLowerCase().includes(filters.industry_query.toLowerCase()))
        // Add other filter checks
    );
    setCompanyResults(companies);
    setTotalCompanyCount(companies.length);
    // --- MOCK FILTERING LOGIC END ---
  };


  // --- UNLOCKING LOGIC (Updated) ---
  const handleUnlockContact = async (personId: number) => {
      if (showContactInfo[personId]) return;  // Already unlocked

      if (!user) {
          toast.error("Please log in to unlock contacts.");
          return;
      }
      if (user.credits_remaining <= 0) {
          toast.error("You have no credits remaining.");
          return;
      }

      console.log(`Attempting to unlock contact for person ID: ${personId}`);

      // DEV MODE: Mock the API response for testing
      if (process.env.NODE_ENV === 'development') {
          // Simulate a successful response with mock data
          const mockUnlockedData = {
              email: { full: "mock@example.com" },  // Replace with actual mock based on your data
              phone: { full: "123-456-7890" },
          };

          // Update state as if the API succeeded
          setPeopleResults(prevResults =>
              prevResults.map(p =>
                  p.id === personId ? { ...p, email: mockUnlockedData.email, phone: mockUnlockedData.phone } : p
              )
          );
          setShowContactInfo(prev => ({ ...prev, [personId]: true }));
          updateLocalCredits(user.credits_remaining - 1);  // Decrement credits
          toast.success("Contact unlocked successfully (dev mock)!");
          return;
      }

      // Original API call for production
      try {
          const response = await fetch(`/api/people/${personId}/unlock/`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' /* Add auth headers if needed */ },
          });
          if (response.ok) {
              const unlockedData = await response.json();
              setPeopleResults(prevResults =>
                  prevResults.map(p =>
                      p.id === personId ? { ...p, email: unlockedData.email, phone: unlockedData.phone } : p
                  )
              );
              setShowContactInfo(prev => ({ ...prev, [personId]: true }));
              updateLocalCredits(user.credits_remaining - 1);
              toast.success("Contact unlocked successfully!");
          } else {
              const errorData = await response.json();
              toast.error("Failed to unlock contact.");
          }
      } catch (error) {
          console.error(error);
          toast.error("An error occurred.");
      }
  };


  // --- Filter Definitions ---
  const personFilterGroups = [
     { groupName: "Name", facets: [{ key: "name_query", displayName: "Name", placeholder: "Enter name..." }] },
     { groupName: "Location", facets: [{ key: "location_query", displayName: "Location", placeholder: "City, State, Country..." }] },
     { groupName: "Occupation", facets: [
         { key: "title_query", displayName: "Job Title", placeholder: "Enter job title..." },
         // { key: "department_query", displayName: "Department", placeholder: "e.g., Marketing" },
         // { key: "skills_query", displayName: "Skills", placeholder: "e.g., React, Python" },
         // { key: "years_experience_min", displayName: "Min Experience", type: "number", placeholder: "Min Years" },
         // { key: "years_experience_max", displayName: "Max Experience", type: "number", placeholder: "Max Years" },
     ]},
     { groupName: "Employer", facets: [
         { key: "company_query", displayName: "Company Name or Domain", placeholder: "Enter company..." },
         { key: "industry_query", displayName: "Industry", placeholder: "e.g., Technology" },
         // { key: "company_size_min", displayName: "Min Employees", type: "number" },
         // { key: "company_size_max", displayName: "Max Employees", type: "number" },
         // { key: "company_revenue_min", displayName: "Min Revenue ($M)", type: "number" },
         // { key: "company_revenue_max", displayName: "Max Revenue ($M)", type: "number" },
     ]},
      // { groupName: "Education", facets: [...] },
      // { groupName: "Contact Info", facets: [...] }, // Maybe checkboxes: Has Email, Has Phone
  ];

   const companyFilterGroups = [
       { groupName: "Company", facets: [{ key: "company_query", displayName: "Company Name or Domain", placeholder: "Enter company..." }] },
       { groupName: "Location", facets: [{ key: "location_query", displayName: "Location", placeholder: "City, State, Country..." }] },
       { groupName: "Industry", facets: [{ key: "industry_query", displayName: "Industry", placeholder: "e.g., Technology" }] },
       // Add more company-specific filters (size, revenue, etc.)
   ];

  const currentFilterGroups = activeTab === 'people' ? personFilterGroups : companyFilterGroups;
  const currentResults = activeTab === 'people' ? peopleResults : companyResults;
  const currentTotalCount = activeTab === 'people' ? totalPeopleCount : totalCompanyCount;


  return (
    <div className="min-h-screen flex flex-col font-inter text-gray-800 bg-gray-100">
      {/* Header might be global */}
      <main className="flex-grow">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6 py-6">
          {/* Top Tabs */}
          <div className="flex mb-5 bg-white border border-gray-200 rounded-full w-auto sm:w-72 p-1 shadow-sm mx-auto sm:mx-0">
            {/* People/Companies Tab Buttons */}
            <button 
               className={`flex-1 py-2 px-4 rounded-full font-medium text-sm transition-all duration-200 ease-in-out ${
                 activeTab === "people"
                   ? "bg-blue-600 text-white shadow-md"
                   : "text-gray-600 hover:bg-gray-100"
               }`}
               onClick={() => setActiveTab("people")}
            >
              People
            </button>
            <button 
               className={`flex-1 py-2 px-4 rounded-full font-medium text-sm transition-all duration-200 ease-in-out ${
                 activeTab === "companies"
                   ? "bg-blue-600 text-white shadow-md"
                   : "text-gray-600 hover:bg-gray-100"
               }`}
               onClick={() => setActiveTab("companies")}
            >
              Companies
            </button>
          </div>
          
          {/* Main Layout Grid */}
          <div className={cn(
            "grid grid-cols-1 gap-6 transition-[grid-template-columns] duration-300 ease-in-out",
            sidebarCollapsed ? 'md:grid-cols-[auto_1fr]' : 'md:grid-cols-[280px_1fr]' // Adjust width as needed
          )}>

            {/* --- Left Sidebar (Filters) --- */}
            <aside className={cn(
              "bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-300 ease-in-out",
              sidebarCollapsed ? 'w-16 p-3' : 'w-full p-4' // Adjust collapsed width/padding
            )}>
              {sidebarCollapsed ? (
                // -- Collapsed Sidebar View --
                 <div className="flex flex-col items-center gap-4">
                   <Button variant="ghost" size="icon" onClick={() => setSidebarCollapsed(false)} className="mb-2 text-gray-600 hover:bg-gray-100">
                     <ChevronLeft size={20} /> {/* Pointing left to expand */}
                   </Button>
                   <div className="flex flex-col items-center gap-5">
                     <Button variant="ghost" size="icon" className="text-gray-500 relative" title="Saved Searches">
                        <Star size={20} />
                        {/* Add count badge if needed */}
                     </Button>
                     <Button variant="ghost" size="icon" className="text-gray-500 relative" title="Active Filters">
                       <Filter size={20} className={activeFilterBadges.length > 0 ? 'text-blue-600' : ''}/>
                       {activeFilterBadges.length > 0 && (
                         <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                           {activeFilterBadges.length}
                         </span>
                       )}
                     </Button>
                      {/* Add other collapsed icons if needed */}
                   </div>
              </div>
              ) : (
                 // -- Expanded Sidebar View --
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-200">
                     <h2 className="text-base font-semibold text-gray-800 flex items-center gap-2">
                        <Filter size={16} /> Filters
                     </h2>
                     <Button variant="ghost" size="icon" onClick={() => setSidebarCollapsed(true)} className="text-gray-500 hover:bg-gray-100 h-7 w-7">
                       <ChevronDown size={18} /> {/* Or ChevronLeft */}
                     </Button>
              </div>
                
                  {/* Scrollable Area for Filters */}
                  <ScrollArea className="flex-grow pr-3 -mr-3 mb-4"> {/* Negative margin hides scrollbar slightly */}
                      {/* Saved Searches */}
                      <Accordion type="single" collapsible className="w-full mb-4">
                        <AccordionItem value="saved-searches" className="border-none">
                          <AccordionTrigger className="py-1.5 px-1 text-sm font-medium text-gray-700 hover:no-underline hover:bg-gray-50 rounded data-[state=closed]:opacity-80">
                            <div className="flex items-center gap-2">
                              <Star size={16} className="text-yellow-500"/> Saved Searches
            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pt-2 pb-0 px-1 text-xs text-gray-500">
                            You have no saved searches yet.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      {/* Active Filters */}
                      <div className="mb-4 px-1">
                         <div className="flex justify-between items-center mb-1.5">
                           <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Active Filters</h3>
                           {activeFilterBadges.length > 0 && (
                             <Button variant="link" size="sm" className="text-blue-600 h-auto p-0 text-xs" onClick={clearAllFilters}>
                               Clear All
                             </Button>
                           )}
              </div>
                         {activeFilterBadges.length > 0 ? (
                           <div className="flex flex-wrap gap-1.5">
                             {activeFilterBadges.map((badge) => (
                               <div key={badge.key} className="flex items-center bg-blue-100 text-blue-800 text-xs font-medium pl-2 pr-1 py-0.5 rounded-full">
                                 <span>{badge.value}</span>
                                 <button onClick={() => clearFilter(badge.key)} className="ml-1 text-blue-500 hover:text-blue-700 rounded-full hover:bg-blue-200 p-0.5">
                                   <X size={12} strokeWidth={2.5}/>
                  </button>
              </div>
                             ))}
              </div>
                         ) : (
                           <p className="text-xs text-gray-400 italic">No filters applied.</p>
                         )}
            </div>
            
                      {/* Filter Accordions */}
                      <Accordion type="multiple" defaultValue={currentFilterGroups.map(g => g.groupName)} className="w-full space-y-1">
                        {currentFilterGroups.map((group) => (
                          <AccordionItem value={group.groupName} key={group.groupName} className="border border-gray-200 rounded-md overflow-hidden bg-white">
                            <AccordionTrigger className="py-2 px-3 text-sm font-medium hover:bg-gray-50 hover:no-underline data-[state=open]:border-b data-[state=open]:bg-gray-50">
                               {group.groupName}
                            </AccordionTrigger>
                            <AccordionContent className="p-3 space-y-3 text-sm">
                              {group.facets.map((facet) => (
                                 <div key={facet.key}>
                                   <Label htmlFor={facet.key} className="text-xs font-medium text-gray-600 mb-1 block">{facet.displayName}</Label>
                                   {/* Add more input types here (Select, Range Slider, Checkbox group) based on facet.type */}
                                   <Input
                                       id={facet.key}
                                       type={facet.type === 'number' ? 'number' : 'search'}
                                       placeholder={facet.placeholder}
                                       value={filters[facet.key as keyof Filters] || ""}
                                       onChange={(e) => handleFilterChange(facet.key as keyof Filters, e.target.value)}
                                       className="h-8 text-sm" // Smaller input
                                   />
              </div>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                  </ScrollArea> {/* End Scroll Area */}

                   {/* Action Buttons */}
                   <div className="mt-auto border-t pt-3 space-y-2"> {/* mt-auto pushes to bottom */}
                     <Button className="w-full bg-blue-600 hover:bg-blue-700 h-9 text-sm" onClick={handleApplyFilters}>
                        Apply Filters
                     </Button>
                     <Button variant="outline" className="w-full h-9 text-sm">
                       <Star size={14} className="mr-1.5"/> Save Search
                     </Button>
              </div>
            </div>
              )}
            </aside>

            {/* --- Main content area (Results) --- */}
            <div className="min-w-0"> {/* Needed for grid layout */}
               {/* Loading/Error States Placeholder */}
               {/* {isLoading && <p>Loading...</p>} */}
               {/* {error && <p>Error loading results: {error.message}</p>} */}

               {/* Results Header (Count) */}
               <div className="mb-3 text-sm text-gray-600">
                 Showing <span className="font-semibold">{currentResults.length}</span> of <span className="font-semibold">{currentTotalCount}</span> {activeTab}
            </div>
            
               {/* --- People/Company Cards --- */}
               {activeTab === 'people' ? (
                   <div className="bg-white rounded-lg shadow-md border border-gray-200 divide-y divide-gray-200">
                       {peopleResults.length > 0 ? (
                           peopleResults.map((person) => (
                              <div key={person.id} className="p-4 flex items-start gap-4 hover:bg-gray-50/70">
                                  <Checkbox id={`person-${person.id}`} className="mt-1 flex-shrink-0 border-gray-300"/>
                                  <img
                                     src={person.avatar} alt={`${person.firstName} ${person.lastName}`}
                                     className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-sm flex-shrink-0"
                                  />
                                  <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-1 text-sm min-w-0">
                                      {/* Col 1: Name & Title */}
                                      <div className="min-w-0">
                                          <Link href={`/profile/${person.id}`} className="font-semibold text-gray-800 hover:text-blue-600 truncate block">{person.firstName} {person.lastName}</Link>
                                          <p className="text-gray-600 truncate">{person.position}</p>
                                          <p className="text-gray-500 mt-0.5 flex items-center text-xs truncate">
                                              <MapPin size={12} className="mr-1 text-gray-400 flex-shrink-0" />
                              {person.location}
                            </p>
              </div>
                                      {/* Col 2: Company */}
                                      <div className="min-w-0">
                                          <Link href={`/company/${person.company}`} className="text-blue-600 hover:underline font-medium truncate block">
                              {person.company}
                            </Link>
                                          {/* Add Company Industry/Size if available */}
            </div>
                                      {/* Col 3: Contact Info */}
                                      <div className="space-y-1">
                                          <div className="flex items-center text-xs">
                                              <Mail size={13} className="text-gray-400 mr-1.5 flex-shrink-0" />
                                              <span className={`px-1.5 py-0.5 rounded ${showContactInfo[person.id] ? 'bg-green-100 text-green-800 font-medium' : 'bg-gray-100 text-gray-500'} select-all truncate`}>
                                                  {showContactInfo[person.id] ? person.email.full : `••••${person.email.hidden}`}
                                              </span>
          </div>
                                          <div className="flex items-center text-xs">
                                              <Phone size={13} className="text-gray-400 mr-1.5 flex-shrink-0" />
                                              <span className={`px-1.5 py-0.5 rounded ${showContactInfo[person.id] ? 'bg-green-100 text-green-800 font-medium' : 'bg-gray-100 text-gray-500'} select-all truncate`}>
                                                  {showContactInfo[person.id] ? person.phone.full : person.phone.hidden}
                                    </span>
                                </div>
                              </div>
                            </div>
                          {/* Actions */}
                                  <div className="flex-shrink-0 ml-2">
                                      <Button
                                          size="sm" 
                                          variant={showContactInfo[person.id] ? "outline" : "default"}
                                          className={`h-8 text-xs whitespace-nowrap px-3 shadow-sm transition-all duration-150 ${
                                              showContactInfo[person.id] 
                                                  ? 'text-green-700 bg-green-50 border-green-200 hover:bg-green-100 cursor-default' 
                                                  : (user && user.credits_remaining > 0) 
                                                      ? 'bg-blue-600 hover:bg-blue-700 text-white' // Can unlock
                                                      : 'bg-gray-400 text-gray-700 cursor-not-allowed' // Cannot unlock (no credits or not logged in)
                                          }`}
                                          onClick={() => handleUnlockContact(person.id)}
                                          disabled={showContactInfo[person.id] || !user || user.credits_remaining <= 0} // Disable if unlocked OR no user OR no credits
                                      >
                                          {showContactInfo[person.id] 
                                              ? 'Unlocked' 
                                              : `Unlock Contact ${user?.user_type === 'free' ? '(1 Credit)' : ''}` // Show credit cost for free users?
                                          } 
                                      </Button>
                                      {/* Add Connect Button Here if needed */}
                          </div>
                        </div>
                           ))
                       ) : (
                           <p className="p-6 text-center text-gray-500 italic">No people found matching your criteria.</p>
                       )}
                    </div>
               ) : (
                   <div className="bg-white rounded-lg shadow-md border border-gray-200 divide-y divide-gray-200">
                       {/* Company Results Rendering (similar structure to people) */}
                        {companyResults.length > 0 ? (
                            companyResults.map((company) => (
                                <div key={company.id} className="p-4 flex items-start gap-4 hover:bg-gray-50/70">
                                    {/* ... Company card content ... */}
                  </div>
                            ))
                        ) : (
                             <p className="p-6 text-center text-gray-500 italic">No companies found matching your criteria.</p>
                        )}
                              </div>
               )}

               {/* --- Pagination Placeholder --- */}
                <div className="mt-6 flex justify-center">
                    {/* Add Pagination Component Here */}
                    <p className="text-xs text-gray-500">(Pagination Controls Go Here)</p>
                  </div>

            </div> {/* End Main Content Column */}
          </div> {/* End Main Grid */}
        </div> {/* End Container */}
      </main>
      {/* Footer might be global */}
    </div>
  );
}