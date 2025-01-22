import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

interface SuccessMessageProps {
  paymentMethod: 'phone' | 'card' | 'apple' | null;
}

export function SuccessMessage({ paymentMethod }: SuccessMessageProps) {
  const handleCallNow = () => {
    window.location.href = 'tel:1300420911'
  }

  return (
    <div className="text-center mt-4">
      <p className="text-gray-600">
        {paymentMethod === 'phone' 
          ? "One of our representatives will call you soon to organize a suitable time for your appointment."
          : "Thank you for your payment. Your appointment has been confirmed."}
      </p>
      {paymentMethod === 'phone' && (
        <div className="space-y-4 mt-4">
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">or</span>
            </div>
          </div>
          <Button 
            onClick={handleCallNow}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white"
          >
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </Button>
        </div>
      )}
    </div>
  )
}