import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const services = [
  { id: "plumbing", label: "Plumbing" },
  { id: "gas", label: "Gas Fitting" },
  { id: "roofing", label: "Roof Repairs" },
  { id: "ac", label: "Air Conditioning" }
]

interface ServiceSelectionProps {
  selectedServices: string[]
  handleServiceChange: (serviceId: string) => void
}

export function ServiceSelection({ selectedServices, handleServiceChange }: ServiceSelectionProps) {
  return (
    <div className="space-y-0.5">
      <Label className="text-sm">Services Required</Label>
      <div className="grid grid-cols-2 gap-0.5" role="group" aria-label="Select services">
        {services.map((service) => (
          <div key={service.id} className="flex items-center space-x-1.5 p-1 hover:bg-gray-50 rounded">
            <Checkbox
              id={service.id}
              checked={selectedServices.includes(service.id)}
              onCheckedChange={() => handleServiceChange(service.id)}
              className="h-3.5 w-3.5"
              aria-label={`Select ${service.label} service`}
            />
            <Label 
              htmlFor={service.id} 
              className="text-sm cursor-pointer"
            >
              {service.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}