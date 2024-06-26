// components/LoginCard.js
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/Card";
import { Label } from "../components/ui/Label.js";
import { Input } from "../components/ui/Input";
import { Link } from 'react-router-dom';
import { Checkbox } from "../components/ui/Checkbox";

import '../assets/css/login.css';

export function LoginCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle><label className="loginName">Login</label></CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2 pp">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="Enter your username" />
        </div>
        <div className="space-y-2 pp">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            
          </div>
          <Input id="password" type="password" placeholder="Enter your password" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
      </CardContent>
      <CardFooter>
      
        <Link to="/">
          <button type="button" className="w-full button">
            Login
          </button>
        </Link>
      </CardFooter>
    </Card>
  );
}
