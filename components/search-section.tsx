'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Search } from 'lucide-react'

export function SearchSection() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex justify-center gap-4 mb-4">
        <Button variant="ghost" className="border-b-2 border-primary">Buy</Button>
        <Button variant="ghost" className="text-primary">Rent</Button>
        <Button variant="ghost">Commercial</Button>
      </div>
      <div className="grid gap-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select City" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bangalore">Bangalore</SelectItem>
            <SelectItem value="mumbai">Mumbai</SelectItem>
            <SelectItem value="delhi">Delhi</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex gap-4">
          <RadioGroup defaultValue="full" className="flex">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="full" id="full" />
              <Label htmlFor="full">Full House</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pg" id="pg" />
              <Label htmlFor="pg">PG/Hostel</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="flatmates" id="flatmates" />
              <Label htmlFor="flatmates">Flatmates</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex gap-2">
          <Input placeholder="Search upto 3 localities or landmarks" className="flex-1" />
          <Button>
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}

