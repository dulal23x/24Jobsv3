import { useState } from "react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  MapPin, 
  Download,
  Mail,
  Phone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


// Mock data for demonstration purposes
// In a real application, this would come from an API
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

export default function People() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPeople, setFilteredPeople] = useState<Person[]>(MOCK_PEOPLE);
  const [connectedPeople, setConnectedPeople] = useState<Set<number>>(new Set());
  const [showContactInfo, setShowContactInfo] = useState<Set<number>>(new Set());
  
  // Applied filters
  const [jobTitleFilter, setJobTitleFilter] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Apply all filters
    let filtered = MOCK_PEOPLE;
    
    // Apply search term filter
    if (searchTerm) {
      filtered = filtered.filter(person => 
        person.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || 
        person.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.position.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply job title filter
    if (jobTitleFilter) {
      filtered = filtered.filter(person => 
        person.position.toLowerCase().includes(jobTitleFilter.toLowerCase())
      );
    }
    
    // Apply company filter
    if (companyFilter) {
      filtered = filtered.filter(person => 
        person.company.toLowerCase().includes(companyFilter.toLowerCase())
      );
    }
    
    // Apply location filter
    if (locationFilter) {
      filtered = filtered.filter(person => 
        person.location.toLowerCase().includes(locationFilter.toLowerCase())
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

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto max-w-[1180px] px-4 md:px-6 py-8">
          {/* Search Form */}
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="border-b border-gray-200 px-6 py-4">
              <h1 className="text-lg font-medium text-gray-800">People Search</h1>
            </div>
            
            <div className="px-6 py-4">
              <form onSubmit={handleSearch}>
                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    className="rounded-lg bg-[#0D6EF7] hover:bg-[#0D6EF7]/90 text-white px-6 py-2 text-sm font-medium"
                  >
                    Search
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <div>
                <h2 className="font-medium">People</h2>
                <p className="text-xs text-gray-500">Showing {filteredPeople.length} results</p>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-1 text-gray-600 border-gray-300"
                >
                  <Download size={14} />
                  Export
                </Button>
              </div>
            </div>
            
            {/* People List */}
            <div>
              {filteredPeople.map((person, index) => (
                <div 
                  key={person.id} 
                  className={`py-4 px-6 flex items-start border-b border-gray-200 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}
                >
                  {/* Checkbox */}
                  <div className="mt-1 mr-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </div>
                  
                  {/* Avatar */}
                  <div className="mr-4">
                    <img 
                      src={person.avatar} 
                      alt={`${person.firstName} ${person.lastName}`}
                      className="w-10 h-10 rounded-full object-cover border border-gray-200"
                    />
                  </div>
                  
                  {/* Column 1: Name & Details */}
                  <div className="mr-6 min-w-[180px] flex-1">
                    <h3 className="text-sm font-semibold text-gray-800">
                      {person.firstName} {person.lastName}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {person.position}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 flex items-center">
                      <MapPin size={12} className="mr-1" />
                      {person.location}
                    </p>
                  </div>
                  
                  {/* Column 2: Company */}
                  <div className="mr-6 min-w-[120px]">
                    <Link 
                      href="#" 
                      className="text-sm text-[#0D6EF7] hover:underline"
                    >
                      {person.company}
                    </Link>
                    <div className="mt-1 inline-flex px-2 py-0.5 bg-gray-100 text-xs text-gray-600 rounded">
                      {person.position.split(' ')[0]}
                    </div>
                  </div>
                  
                  {/* Column 3: Contact & Tags */}
                  <div className="mr-6 flex-1">
                    <div className="flex items-center mb-2">
                      <Mail size={12} className="text-gray-500 mr-1.5" />
                      <div className={`px-2 py-0.5 rounded ${canViewContactInfo(person.id) ? 'bg-blue-50 text-[#0D6EF7]' : 'bg-gray-100 text-gray-500'} text-xs`}>
                        {canViewContactInfo(person.id) ? 
                          person.email.full : 
                          <span>
                            <span className="text-gray-400">•••</span>
                            {person.email.hidden}
                          </span>
                        }
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone size={12} className="text-gray-500 mr-1.5" />
                      <div className={`px-2 py-0.5 rounded ${canViewContactInfo(person.id) ? 'bg-blue-50 text-[#0D6EF7]' : 'bg-gray-100 text-gray-500'} text-xs`}>
                        {canViewContactInfo(person.id) ? person.phone.full : person.phone.hidden}
                      </div>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center">
                    <button
                      className="h-9 rounded-lg text-white px-[12px] text-[12px] font-medium shadow-sm bg-[#0D6EF7] hover:bg-[#0A56C4]"
                      onClick={() => canViewContactInfo(person.id) ? handleConnect(person.id) : handleGetContactInfo(person.id)}
                      disabled={isConnected(person.id)}
                    >
                      {canViewContactInfo(person.id) ? 
                        (isConnected(person.id) ? 'Connected' : 'Connect') : 
                        'View Contact'}
                    </button>
                    <button className="ml-3 text-[#0D6EF7] text-sm underline">
                      View More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}