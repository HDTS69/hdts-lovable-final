import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

interface PhonePaymentButtonProps {
  onSuccess: () => void;
}

export function PhonePaymentButton({ onSuccess }: PhonePaymentButtonProps) {
  const handlePhonePayment = () => {
    onSuccess()
  }

  return (
    <Button
      onClick={handlePhonePayment}
      className="w-full mb-4 bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300 flex items-center justify-center"
    >
      <Phone className="mr-2 h-4 w-4" />
      Pay Attendance Fee Over the Phone
    </Button>
  )
}