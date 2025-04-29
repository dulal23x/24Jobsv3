import React from "react";
import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import Header24Jobs from "./components/Header24Jobs";
import Footer24Jobs from "./components/Footer24Jobs";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Discover from "./pages/Discover";
import People from "./pages/People";
import Company from "./pages/Company";
import Companies from "./pages/Companies";
import CompanyReviews from "./pages/CompanyReviews";
import Salary from "./pages/Salary";
import Employer from "./pages/Employer";
import NotFound from "./pages/not-found";


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <Header24Jobs />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/people" component={People} />
          <Route path="/companies" component={Companies} />
          <Route path="/company-reviews" component={CompanyReviews} />
          <Route path="/salary" component={Salary} />
          <Route path="/employer" component={Employer} />
          <Route path="/company/:id" component={Company} />
          <Route component={NotFound} />
        </Switch>
        <Footer24Jobs />
      </div>
    </QueryClientProvider>
  );
}

export default App;