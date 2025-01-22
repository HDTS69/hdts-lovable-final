import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Apple } from "lucide-react"

interface ApplePayButtonProps {
  isAvailable: boolean;
  onSuccess: () => void;
}

export function ApplePayButton({ isAvailable, onSuccess }: ApplePayButtonProps) {
  if (!isAvailable) return null;

  const handleApplePay = () => {
    if (!isAvailable) {
      toast({
        title: "Apple Pay Not Available",
        description: "Please use another payment method.",
        variant: "destructive",
      })
      return
    }

    try {
      const paymentRequest = {
        countryCode: 'AU',
        currencyCode: 'AUD',
        supportedNetworks: ['visa', 'masterCard', 'amex'],
        merchantCapabilities: ['supports3DS'],
        total: {
          label: 'HD Trade Services Attendance Fee',
          amount: '120.00'
        }
      }

      const session = new window.ApplePaySession(3, paymentRequest)

      session.onvalidatemerchant = (event) => {
        // In a production environment, you would validate the merchant session here
        // For testing, we'll simulate a successful validation
        console.log('Validating merchant:', event)
        session.completeMerchantValidation({})
      }

      session.onpaymentauthorized = (event) => {
        console.log('Payment authorized:', event)
        // In a production environment, you would process the payment here
        // For testing, we'll simulate a successful payment
        session.completePayment(window.ApplePaySession.STATUS_SUCCESS)
        toast({
          title: "Apple Pay Payment Successful",
          description: "Your attendance fee has been paid. We'll be in touch shortly to confirm your appointment.",
        })
        onSuccess()
      }

      session.oncancel = (event) => {
        console.log('Payment cancelled:', event)
        toast({
          title: "Payment Cancelled",
          description: "The Apple Pay payment was cancelled. Please try again or use another payment method.",
          variant: "destructive",
        })
      }

      session.begin()
    } catch (error) {
      console.error('Apple Pay error:', error)
      toast({
        title: "Payment Error",
        description: "There was an error processing your Apple Pay payment. Please try again or use another payment method.",
        variant: "destructive",
      })
    }
  }

  return (
    <Button
      onClick={handleApplePay}
      className="w-full mb-4 bg-black text-white hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
    >
      <Apple className="h-5 w-5" />
      Pay with Apple Pay
    </Button>
  )
}