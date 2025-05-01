import { useState } from "react";
import { Link } from "wouter";
import { 
  Search, 
  MapPin, 
  Download,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin
} from "lucide-react";
import Footer24Jobs from "../components/Footer24Jobs";

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

export default function People() {
  // Tab state
  const [activeTab, setActiveTab] = useState<'people' | 'companies'>('people');
  
  // People tab state
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPeople, setFilteredPeople] = useState<Person[]>(MOCK_PEOPLE);
  const [connectedPeople, setConnectedPeople] = useState<Set<number>>(new Set());
  const [showContactInfo, setShowContactInfo] = useState<Set<number>>(new Set());
  
  // Companies tab state
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>(MOCK_COMPANIES);
  const [companySearchTerm, setCompanySearchTerm] = useState("");
  const [followedCompanies, setFollowedCompanies] = useState<Set<number>>(new Set());
  const [showCompanyInfo, setShowCompanyInfo] = useState<Set<number>>(new Set());
  
  // People tab handlers
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Apply search term filter
    let filtered = MOCK_PEOPLE;
    if (searchTerm) {
      filtered = filtered.filter(person => 
        person.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || 
        person.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.position.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredPeople(filtered);
  };

  const handleConnect = (personId: number) => {
    setConnectedPeople(prev => {
      const updated = new Set(prev);
      updated.add(personId);
      return updated;
    });
  };

  const handleGetContactInfo = (personId: number) => {
    setShowContactInfo(prev => {
      const updated = new Set(prev);
      updated.add(personId);
      return updated;
    });
  };

  const isConnected = (personId: number) => connectedPeople.has(personId);
  const canViewContactInfo = (personId: number) => isConnected(personId) || showContactInfo.has(personId);
  
  // Companies tab handlers
  const handleCompanySearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    let filtered = MOCK_COMPANIES;
    if (companySearchTerm) {
      filtered = filtered.filter(company => 
        company.name.toLowerCase().includes(companySearchTerm.toLowerCase()) || 
        company.industry.toLowerCase().includes(companySearchTerm.toLowerCase()) ||
        company.description.toLowerCase().includes(companySearchTerm.toLowerCase())
      );
    }
    
    setFilteredCompanies(filtered);
  };
  
  const handleFollow = (companyId: number) => {
    setFollowedCompanies(prev => {
      const updated = new Set(prev);
      updated.add(companyId);
      return updated;
    });
  };
  
  const handleGetCompanyInfo = (companyId: number) => {
    setShowCompanyInfo(prev => {
      const updated = new Set(prev);
      updated.add(companyId);
      return updated;
    });
  };
  
  const isFollowing = (companyId: number) => followedCompanies.has(companyId);
  const canViewCompanyInfo = (companyId: number) => isFollowing(companyId) || showCompanyInfo.has(companyId);

  return (
    <div className="min-h-screen flex flex-col font-inter text-text-primary">
      {/* <Header /> */}
      <main>
        <div className="container mx-auto max-w-[1180px] px-4 md:px-6 py-8">
          {/* Top tabs for People/Companies */}
          <div className="flex mb-6 bg-gray-100 rounded-full w-64 p-1 shadow-sm">
            <button 
              className={`flex-1 py-2.5 px-5 rounded-full font-medium text-sm transition-all ${
                activeTab === 'people' 
                  ? 'bg-[#3c5aa8] text-white hover:bg-[#2c4a98]' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('people')}
            >
              People
            </button>
            <button 
              className={`flex-1 py-2.5 px-5 rounded-full font-medium text-sm transition-all ${
                activeTab === 'companies' 
                  ? 'bg-[#3c5aa8] text-white hover:bg-[#2c4a98]' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('companies')}
            >
              Companies
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Left sidebar with filters */}
            <div className="md:col-span-1">
              <div className="border border-gray-200 rounded-lg mb-5 shadow-sm hover:border-gray-300 transition-all">
                <button className="w-full py-3.5 px-4 text-left text-gray-700 font-medium text-sm">
                  Saved Searches
                </button>
              </div>
              
              <div className="mb-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium text-gray-700">Search Filters</h3>
                  <button className="text-[#0D6EF7] text-xs hover:underline">Clear All</button>
              </div>
                
                <div className="flex items-center bg-blue-50 rounded-md px-2.5 py-1.5 mb-4 w-fit shadow-sm">
                  <Search size={12} className="text-[#0D6EF7] mr-1.5" />
                  <span className="text-xs text-gray-700">john</span>
                  <button className="ml-1.5 text-[#0D6EF7] hover:text-[#0A56C4] font-medium">×</button>
            </div>
            
                {/* Filter Accordion Items */}
                <div className="space-y-0 rounded-lg overflow-hidden border border-gray-200 shadow-sm mb-6">
                  {[
                    "Name",
                    "Location",
                    "Occupation",
                    "Role & Department",
                    "Skills",
                    "Years of Experience",
                    "Healthcare",
                    "Employer",
                    "Company Name or Domain",
                    "Intent"
                  ].map((filter, index) => (
                    <button 
                      key={filter} 
                      className={`w-full flex justify-between items-center py-3 px-4 border-b border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition-colors ${index === 2 || index === 7 ? 'bg-gray-50' : ''}`}
                    >
                      {filter}
                      {index === 2 || index === 7 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 transform rotate-180">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      )}
                    </button>
                  ))}
              </div>
                
                {/* Bottom Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full py-3.5 bg-[#3c5aa8] text-white rounded-md font-medium shadow-sm hover:bg-[#2c4a98] transition-colors">
                    Save This Search
                  </button>
                  <button className="w-full py-3.5 bg-[#4CAF50] text-white rounded-md font-medium shadow-sm hover:bg-[#43a047] transition-colors flex items-center justify-center">
                    <span className="mr-1.5">Start New Autopilot</span>
                    <span className="text-xs px-1.5 py-0.5 bg-white text-green-600 rounded font-medium">Beta</span>
                  </button>
              </div>
              </div>
            </div>
            
            {/* Main content area */}
            <div className="md:col-span-3">
              {activeTab === 'people' ? (
                <>
                  {/* People Search Form */}
                  <div className="bg-white rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow">
                    <div className="border-b border-gray-200 px-6 py-4">
                      <h1 className="text-lg font-medium text-gray-800">People Search</h1>
              </div>
                    
                    <div className="px-6 py-5">
                      <form onSubmit={handleSearch}>
                        {/* Search button removed as requested */}
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-600 italic">
                            Use the filters on the left to refine your search
              </div>
            </div>
                      </form>
          </div>
        </div>
        
                  {/* People Results Section */}
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <div>
                        <h2 className="font-medium text-gray-800">People</h2>
                        <p className="text-xs text-gray-500 mt-1">Showing <span className="font-medium text-gray-700">{filteredPeople.length}</span> results</p>
              </div>
                      <div className="flex items-center gap-2">
                <button 
                          className="flex items-center gap-1.5 text-gray-600 border-gray-300 hover:bg-gray-100 transition-colors h-9"
                >
                          <Download size={15} />
                          Export
                </button>
              </div>
            </div>
            
                    {/* People List */}
                    <div>
                      {filteredPeople.map((person, index) => (
                        <div 
                          key={person.id} 
                          className={`py-5 px-6 flex items-start border-b border-gray-200 ${index % 2 === 1 ? 'bg-gray-50' : ''} hover:bg-blue-50/20 transition-colors`}
                        >
                          {/* Checkbox */}
                          <div className="mt-1 mr-4">
                            <input type="checkbox" className="rounded border-gray-300 text-[#0D6EF7] focus:ring-[#0D6EF7]" />
            </div>
            
                          {/* Avatar */}
                          <div className="mr-4">
                            <img 
                              src={person.avatar} 
                              alt={`${person.firstName} ${person.lastName}`}
                              className="w-11 h-11 rounded-full object-cover border border-gray-200 shadow-sm"
                            />
              </div>
                          
                          {/* Column 1: Name & Details */}
                          <div className="mr-6 min-w-[180px] flex-1">
                            <h3 className="text-[15px] font-semibold text-gray-800 hover:text-[#0D6EF7] cursor-pointer transition-colors">
                              {person.firstName} {person.lastName}
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-1.5">
                              {person.position}
                            </p>
                            <p className="text-[12px] text-gray-500 mt-1.5 flex items-center">
                              <MapPin size={12} className="mr-1.5 text-gray-400" />
                              {person.location}
                            </p>
              </div>
                          
                          {/* Column 2: Company */}
                          <div className="mr-6 min-w-[120px]">
                            <Link 
                              href="#" 
                              className="text-[14px] text-[#0D6EF7] hover:underline font-medium"
                            >
                              {person.company}
                            </Link>
                            <div className="mt-2 inline-flex px-2.5 py-1 bg-gray-100 text-xs text-gray-600 rounded-md shadow-sm">
                              {person.position.split(' ')[0]}
            </div>
          </div>
          
                          {/* Column 3: Contact & Tags */}
                          <div className="mr-6 flex-1">
                            <div className="flex items-center mb-2.5">
                              <Mail size={13} className="text-gray-500 mr-2" />
                              <div className={`px-2.5 py-1 rounded-md ${canViewContactInfo(person.id) ? 'bg-blue-50 text-[#0D6EF7]' : 'bg-gray-100 text-gray-500'} text-xs shadow-sm`}>
                                {canViewContactInfo(person.id) ? 
                                  person.email.full : 
                                  <span>
                                    <span className="text-gray-400 font-medium">•••</span>
                                    {person.email.hidden}
                                    </span>
                                }
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Phone size={13} className="text-gray-500 mr-2" />
                              <div className={`px-2.5 py-1 rounded-md ${canViewContactInfo(person.id) ? 'bg-blue-50 text-[#0D6EF7]' : 'bg-gray-100 text-gray-500'} text-xs shadow-sm`}>
                                {canViewContactInfo(person.id) ? person.phone.full : person.phone.hidden}
                                </div>
                              </div>
                            </div>
                            
                          {/* Actions */}
                          <div className="flex items-center">
                                  <button 
                              className={`h-9 rounded-[10px] text-white px-4 text-sm font-semibold shadow-md transition-all duration-150 whitespace-nowrap
                                ${canViewContactInfo(person.id) ? (isConnected(person.id) ? 'bg-green-500 hover:bg-green-600' : 'bg-[#1877f2] hover:bg-[#166fe0]') : 'bg-[#1877f2] hover:bg-[#166fe0]'}
                              `}
                              style={{boxShadow: '0 2px 8px 0 rgba(24,119,242,0.10)', whiteSpace: 'nowrap'}} 
                              onClick={() => canViewContactInfo(person.id) ? handleConnect(person.id) : handleGetContactInfo(person.id)}
                              disabled={isConnected(person.id)}
                            >
                              {canViewContactInfo(person.id) ? 
                                (isConnected(person.id) ? 'Connected' : 'Connect') : 
                                'View Contact'}
                            </button>
                            <button className="ml-3 text-[#0D6EF7] text-sm hover:text-[#0A56C4] underline">
                              View More
                                  </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                                      </>
                                    ) : (
                                      <>
                  {/* Companies Search Form */}
                  <div className="bg-white rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow">
                    <div className="border-b border-gray-200 px-6 py-4">
                      <h1 className="text-lg font-medium text-gray-800">Companies Search</h1>
                              </div>
                    
                    <div className="px-6 py-5">
                      <form onSubmit={handleCompanySearch}>
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-600 italic">
                            Use the filters on the left to refine your company search
                          </div>
                        </div>
                      </form>
                      </div>
                  </div>

                  {/* Companies Results Section */}
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                      <div>
                        <h2 className="font-medium text-gray-800">Companies</h2>
                        <p className="text-xs text-gray-500 mt-1">Showing <span className="font-medium text-gray-700">{filteredCompanies.length}</span> results</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          className="flex items-center gap-1.5 text-gray-600 border-gray-300 hover:bg-gray-100 transition-colors h-9"
                        >
                          <Download size={15} />
                          Export
                        </button>
                      </div>
                    </div>
                    
                    {/* Companies List */}
                    <div>
                      {filteredCompanies.map((company, index) => (
                        <div 
                          key={company.id} 
                          className={`py-5 px-6 flex items-start border-b border-gray-200 ${index % 2 === 1 ? 'bg-gray-50' : ''} hover:bg-blue-50/20 transition-colors`}
                        >
                          {/* Checkbox */}
                          <div className="mt-1 mr-4">
                            <input type="checkbox" className="rounded border-gray-300 text-[#0D6EF7] focus:ring-[#0D6EF7]" />
                          </div>
                          
                          {/* Logo */}
                          <div className="mr-4">
                            <img 
                              src={company.logo} 
                              alt={company.name}
                              className="w-11 h-11 rounded-md object-cover border border-gray-200 shadow-sm"
                            />
                          </div>
                          
                          {/* Column 1: Company Details */}
                          <div className="mr-6 min-w-[180px] flex-1">
                            <h3 className="text-[15px] font-semibold text-gray-800 hover:text-[#0D6EF7] cursor-pointer transition-colors">
                              {company.name}
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-1.5">
                              {company.industry}
                            </p>
                            <p className="text-[12px] text-gray-500 mt-1.5 flex items-center">
                              <MapPin size={12} className="mr-1.5 text-gray-400" />
                              {company.location}
                            </p>
                          </div>
                          
                          {/* Column 2: Company Info */}
                          <div className="mr-6 min-w-[120px]">
                            <Link 
                              href={`https://${company.website}`} 
                              className="text-[14px] text-[#0D6EF7] hover:underline font-medium"
                              target="_blank"
                            >
                              {company.website}
                            </Link>
                            <div className="mt-2 flex items-center gap-2">
                              <div className="inline-flex px-2.5 py-1 bg-gray-100 text-xs text-gray-600 rounded-md shadow-sm">
                                {company.size}
                  </div>
                              <div className="inline-flex px-2.5 py-1 bg-gray-100 text-xs text-gray-600 rounded-md shadow-sm">
                                Founded {company.founded}
          </div>
        </div>
      </div>
      
                          {/* Column 3: Contact & Info */}
                          <div className="mr-6 flex-1">
                            <div className="flex items-center mb-2.5">
                              <Mail size={13} className="text-gray-500 mr-2" />
                              <div className={`px-2.5 py-1 rounded-md ${canViewCompanyInfo(company.id) ? 'bg-blue-50 text-[#0D6EF7]' : 'bg-gray-100 text-gray-500'} text-xs shadow-sm`}>
                                {canViewCompanyInfo(company.id) ? 
                                  company.contactInfo.email.full : 
                                  <span>
                                    <span className="text-gray-400 font-medium">•••</span>
                                    {company.contactInfo.email.hidden}
                                  </span>
                                }
                              </div>
        </div>
                            <div className="flex items-center">
                              <Phone size={13} className="text-gray-500 mr-2" />
                              <div className={`px-2.5 py-1 rounded-md ${canViewCompanyInfo(company.id) ? 'bg-blue-50 text-[#0D6EF7]' : 'bg-gray-100 text-gray-500'} text-xs shadow-sm`}>
                                {canViewCompanyInfo(company.id) ? company.contactInfo.phone.full : company.contactInfo.phone.hidden}
            </div>
            </div>
          </div>
          
                          {/* Actions */}
                          <div className="flex items-center">
                            <button
                              className={`h-9 rounded-lg text-white px-[12px] text-sm font-medium shadow-sm ${
                                isFollowing(company.id) 
                                  ? 'bg-green-500 hover:bg-green-600' 
                                  : canViewCompanyInfo(company.id) 
                                    ? 'bg-[#0D6EF7] hover:bg-[#0A56C4]' 
                                    : 'bg-[#0D6EF7] hover:bg-[#0A56C4]'
                              }`}
                              onClick={() => canViewCompanyInfo(company.id) ? handleFollow(company.id) : handleGetCompanyInfo(company.id)}
                              disabled={isFollowing(company.id)}
                            >
                              {canViewCompanyInfo(company.id) ? 
                                (isFollowing(company.id) ? 'Following' : 'Follow') : 
                                'View Info'}
                            </button>
                            <button className="ml-3 text-[#0D6EF7] text-sm hover:text-[#0A56C4] underline">
                              View More
                            </button>
            </div>
            </div>
                      ))}
            </div>
          </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer24Jobs />
    </div>
  );
}