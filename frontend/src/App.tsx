import React, { useEffect } from "react";
import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import Header24Jobs from "./components/Header24Jobs";
import Footer24Jobs from "./components/Footer24Jobs";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import People from "./pages/People";
import Companies from "./pages/Companies";
import CompanyReviews from "./pages/CompanyReviews";
import Salary from "./pages/Salary";
import Employer from "./pages/Employer";
import Company from "./pages/Company";
import NotFound from "./pages/not-found";
import JobDescription from "./pages/JobDescription";
import Registration from "./pages/Registration";
import Test from "./pages/Test";
import { AuthProvider } from './contexts/AuthContext';
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import SignIn from './components/auth/SignIn';

function App() {
  useEffect(() => {
    console.log("App component mounted");
  }, []);

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="app-container">
          <Header24Jobs />
          <main className="flex-grow">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/jobs" component={Jobs} />
              <Route path="/job/:id" component={JobDescription} />
              <Route path="/people" component={People} />
              <Route path="/companies" component={Companies} />
              <Route path="/company/:id" component={Company} />
              <Route path="/company-reviews" component={CompanyReviews} />
              <Route path="/salary" component={Salary} />
              <Route path="/employer" component={Employer} />
              <Route path="/registration" component={Registration} />
              <Route path="/test" component={Test} />
              <Route path="/blog" component={Blog} />
              <Route path="/blog/:id" component={BlogPostDetail} />
              <Route path="/signin" component={SignIn} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer24Jobs />
        </div>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;