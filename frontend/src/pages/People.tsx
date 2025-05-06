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
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for mobile sidebar
  
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
    <div className="people-page-container bg-gray-100 min-h-screen">
      {/* Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Prospecting</h1>
          {/* Mobile Filter Button */}
          <button 
            className="lg:hidden btn btn-outline-primary mb-4 w-full" 
            onClick={() => setSidebarOpen(true)}
          >
            <Search className="inline-block w-4 h-4 mr-2" /> Filters
          </button>
          {/* Tabs */}
          <div className="w-full lg:w-auto flex border-b border-gray-300">
            <button 
              className={`px-4 py-2 text-sm sm:text-base font-medium ${activeTab === 'people' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('people')}
            >
              People
            </button>
            <button 
              className={`px-4 py-2 text-sm sm:text-base font-medium ${activeTab === 'companies' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('companies')}
            >
              Companies
            </button>
          </div>
              </div>
              
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar (Hidden on small screens, shown as modal/drawer) */}
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            {/* Search Form (People) */}
            {activeTab === 'people' && (
              <form onSubmit={handleSearch} className="mb-6">
                <label htmlFor="peopleSearch" className="block text-sm font-medium text-gray-700 mb-1">Search People</label>
                <div className="relative">
                  <input
                    id="peopleSearch"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Name, company, title..."
                    className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                  <button type="submit" className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-400 hover:text-blue-600">
                    <Search className="w-4 h-4" />
                  </button>
              </div>
              </form>
            )}
            {/* Search Form (Companies) */}
            {activeTab === 'companies' && (
              <form onSubmit={handleCompanySearch} className="mb-6">
                 <label htmlFor="companySearch" className="block text-sm font-medium text-gray-700 mb-1">Search Companies</label>
                 <div className="relative">
                   <input
                     id="companySearch"
                     type="text"
                     value={companySearchTerm}
                     onChange={(e) => setCompanySearchTerm(e.target.value)}
                     placeholder="Company name, industry..."
                     className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                   />
                   <button type="submit" className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-400 hover:text-blue-600">
                     <Search className="w-4 h-4" />
                   </button>
            </div>
                      </form>
            )}
             {/* Add Accordion Filters here (simplified for now) */}
             <div className="space-y-4">
               <h3 className="text-base font-semibold">Location</h3>
               {/* Replace with actual filter inputs */}
               <input type="text" placeholder="Enter location..." className="w-full p-2 border rounded text-sm"/>
               <h3 className="text-base font-semibold">Industry</h3>
               <input type="text" placeholder="Enter industry..." className="w-full p-2 border rounded text-sm"/>
          </div>
          </aside>
        
          {/* Mobile Sidebar (Modal/Drawer) */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true">
              {/* Overlay */}
              <div 
                className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" 
                aria-hidden="true"
                onClick={() => setSidebarOpen(false)} 
              ></div>

              {/* Sidebar Panel */}
              <div className="fixed inset-y-0 left-0 z-50 w-full max-w-xs sm:max-w-sm bg-white p-6 shadow-xl overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Filters</h2>
                <button 
                    type="button" 
                    className="-m-2 p-2 text-gray-400 hover:text-gray-500" 
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
              </div>
                {/* Content identical to desktop sidebar */} 
                {activeTab === 'people' && (
                 <form onSubmit={handleSearch} className="mb-6"> {/* ... same form ... */}</form>
                )}
                {activeTab === 'companies' && (
                 <form onSubmit={handleCompanySearch} className="mb-6"> {/* ... same form ... */}</form>
                )}
                <div className="space-y-4">
                   <h3 className="text-base font-semibold">Location</h3>
                   <input type="text" placeholder="Enter location..." className="w-full p-2 border rounded text-sm"/>
                   <h3 className="text-base font-semibold">Industry</h3>
                   <input type="text" placeholder="Enter industry..." className="w-full p-2 border rounded text-sm"/>
              </div>
              </div>
            </div>
          )}
          
          {/* Results Area */}
          <main className="lg:col-span-3">
            {/* People Results */}
            {activeTab === 'people' && (
              <div className="space-y-4">
                {filteredPeople.map((person) => (
                  <div key={person.id} className="bg-white p-4 sm:p-6 rounded-lg shadow flex flex-col sm:flex-row items-start sm:items-center gap-4">
                     {/* Responsive layout */} 
                    <img src={person.avatar} alt={`${person.firstName} ${person.lastName}`} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover flex-shrink-0" />
                    <div className="flex-grow min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">{person.firstName} {person.lastName}</h3>
                      <p className="text-sm text-gray-600 truncate">{person.position} at {person.company}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-1 truncate">
                        <MapPin className="w-3 h-3 inline-block" /> {person.location}
                      </p>
                      {/* Contact Info (Conditionally Rendered) */}
                      {canViewContactInfo(person.id) && (
                        <div className="mt-2 text-xs space-y-1">
                          <p className="flex items-center gap-1 text-blue-600"><Mail className="w-3 h-3" /> {person.email.full}</p>
                          <p className="flex items-center gap-1 text-blue-600"><Phone className="w-3 h-3" /> {person.phone.full}</p>
                          <div className="flex items-center gap-2 mt-1">
                             <a href={`https://linkedin.com/in/${person.social.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700"><Linkedin className="w-4 h-4"/></a>
                             <a href={`https://twitter.com/${person.social.twitter}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-500"><Twitter className="w-4 h-4"/></a>
                              </div>
                            </div>
                      )}
                                </div>
                    <div className="flex flex-col sm:items-end gap-2 mt-4 sm:mt-0 flex-shrink-0">
                      {/* Buttons */} 
                      {!canViewContactInfo(person.id) ? (
                                  <button 
                           className="btn btn-sm btn-primary w-full sm:w-auto text-xs px-3 py-1.5"
                           onClick={() => handleGetContactInfo(person.id)}
                         >
                           Get Contact Info
                            </button>
                       ) : (
                         <span className="text-xs text-green-600 font-medium">Contact Unlocked</span>
                       )}
                      <button 
                        className={`btn btn-sm ${isConnected(person.id) ? 'btn-outline-secondary' : 'btn-outline-primary'} w-full sm:w-auto text-xs px-3 py-1.5`}
                        onClick={() => handleConnect(person.id)}
                      >
                        {isConnected(person.id) ? 'Disconnect' : 'Connect'} ({person.connections})
                                  </button>
                          </div>
                        </div>
                      ))}
                    </div>
            )}

            {/* Companies Results */}
            {activeTab === 'companies' && (
              <div className="space-y-4">
                {filteredCompanies.map((company) => (
                  <div key={company.id} className="bg-white p-4 sm:p-6 rounded-lg shadow flex flex-col sm:flex-row items-start sm:items-center gap-4">
                     {/* Responsive layout */}
                     <img src={company.logo} alt={`${company.name} logo`} className="w-16 h-16 sm:w-20 sm:h-20 object-contain flex-shrink-0 bg-gray-100 p-1 rounded" />
                     <div className="flex-grow min-w-0">
                       <h3 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">{company.name}</h3>
                       <p className="text-sm text-gray-600 truncate">{company.industry} • {company.size}</p>
                       <p className="text-xs text-gray-500 flex items-center gap-1 mt-1 truncate">
                         <MapPin className="w-3 h-3 inline-block" /> {company.location}
                       </p>
                       <p className="text-xs text-gray-500 mt-1 truncate">Founded: {company.founded} | Revenue: {company.revenue}</p>
                       {/* Contact Info (Conditionally Rendered) */}
                       {canViewCompanyInfo(company.id) && (
                         <div className="mt-2 text-xs space-y-1">
                           <p className="flex items-center gap-1 text-blue-600"><Mail className="w-3 h-3" /> {company.contactInfo.email.full}</p>
                           <p className="flex items-center gap-1 text-blue-600"><Phone className="w-3 h-3" /> {company.contactInfo.phone.full}</p>
                           <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1"><i className="bi bi-link-45deg"></i> {company.website}</a>
                          </div>
                       )}
                        </div>
                     <div className="flex flex-col sm:items-end gap-2 mt-4 sm:mt-0 flex-shrink-0">
                       {/* Buttons */} 
                       {!canViewCompanyInfo(company.id) ? (
                        <button 
                           className="btn btn-sm btn-primary w-full sm:w-auto text-xs px-3 py-1.5"
                           onClick={() => handleGetCompanyInfo(company.id)}
                        >
                           Get Contact Info
                        </button>
                       ) : (
                         <span className="text-xs text-green-600 font-medium">Contact Unlocked</span>
                       )}
                            <button
                         className={`btn btn-sm ${isFollowing(company.id) ? 'btn-outline-secondary' : 'btn-outline-primary'} w-full sm:w-auto text-xs px-3 py-1.5`}
                         onClick={() => handleFollow(company.id)}
                            >
                         {isFollowing(company.id) ? 'Unfollow' : 'Follow'}
                            </button>
                       <button className="btn btn-sm btn-light w-full sm:w-auto text-xs px-3 py-1.5 flex items-center justify-center gap-1">
                         <Download className="w-3 h-3"/> Export
                            </button>
            </div>
            </div>
                      ))}
            </div>
              )}
          </main>
        </div>
      </div>
      {/* Footer - Assuming Footer24Jobs is already responsive */}
      {/* <Footer24Jobs /> */}
      {/* Removed Footer temporarily to simplify focus on People page */} 
    </div>
  );
}