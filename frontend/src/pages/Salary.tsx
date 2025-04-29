import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

const Salary = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  
  // মক ডাটা - এখানে API থেকে ডাটা আসবে
  const salaryData = [
    {
      id: 1,
      title: "সফটওয়্যার ইঞ্জিনিয়ার",
      company: "টেক সলিউশনস বাংলাদেশ",
      location: "ঢাকা",
      minSalary: 35000,
      maxSalary: 120000,
      averageSalary: 65000,
      experience: "১-৫ বছর",
      reports: 125
    },
    {
      id: 2,
      title: "ডাটা সাইন্টিস্ট",
      company: "গ্রামীণ ফিনটেক",
      location: "ঢাকা",
      minSalary: 50000,
      maxSalary: 150000,
      averageSalary: 85000,
      experience: "২-৬ বছর",
      reports: 78
    },
    {
      id: 3,
      title: "প্রোডাক্ট ম্যানেজার",
      company: "বাংলা ই-কমার্স",
      location: "ঢাকা",
      minSalary: 60000,
      maxSalary: 180000,
      averageSalary: 100000,
      experience: "৩-৮ বছর",
      reports: 92
    },
    {
      id: 4,
      title: "মার্কেটিং স্পেশালিস্ট",
      company: "মিডিয়া টেক",
      location: "চট্টগ্রাম",
      minSalary: 25000,
      maxSalary: 80000,
      averageSalary: 45000,
      experience: "১-৪ বছর",
      reports: 65
    }
  ];
  
  const filteredSalaries = salaryData.filter(item => 
    item.title.toLowerCase().includes(jobTitle.toLowerCase()) &&
    item.location.toLowerCase().includes(location.toLowerCase())
  );

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('bn-BD').format(amount);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">স্যালারি তথ্য</h1>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">স্যালারি খুঁজুন</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">জব টাইটেল</label>
            <Input 
              placeholder="যেমন: সফটওয়্যার ইঞ্জিনিয়ার"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">লোকেশন</label>
            <Input 
              placeholder="যেমন: ঢাকা"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex items-end">
            <Button className="w-full">খুঁজুন</Button>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        {filteredSalaries.length > 0 ? (
          filteredSalaries.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    <span>{item.title}</span>
                    <span className="text-green-600 font-bold">
                      ৳ {formatCurrency(item.averageSalary)}/মাস
                    </span>
                  </CardTitle>
                  <div className="text-sm text-gray-500">{item.location} • {item.experience} অভিজ্ঞতা • {item.reports} রিপোর্ট</div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">৳ {formatCurrency(item.minSalary)}</span>
                      <span className="text-sm">৳ {formatCurrency(item.maxSalary)}</span>
                    </div>
                    <Progress value={65} className="h-2" />
                    <div className="flex justify-between mt-1">
                      <span className="text-xs">সর্বনিম্ন</span>
                      <span className="text-xs">সর্বোচ্চ</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">কোম্পানি অনুযায়ী</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-sm">
                        <span className="font-semibold">{item.company}</span>: 
                        <span className="text-green-600 ml-1">৳ {formatCurrency(item.averageSalary)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-lg text-gray-500">কোন স্যালারি তথ্য পাওয়া যায়নি। অন্য কীওয়ার্ড দিয়ে খুঁজুন।</p>
            </div>
          )}
        </div>
      </div>
  );
};

export default Salary; 