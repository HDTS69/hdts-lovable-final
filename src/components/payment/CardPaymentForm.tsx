import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"

interface CardPaymentFormProps {
  onSuccess: () => void;
}

export function CardPaymentForm({ onSuccess }: CardPaymentFormProps) {
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Payment submitted:', { cardNumber, expiryDate, cvv, name })
    toast({
      title: "Payment Successful",
      description: "Your attendance fee has been paid. We'll be in touch shortly to confirm your appointment.",
    })
    onSuccess()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name on Card</Label>
        <Input
          id="name"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="card-number">Card Number</Label>
        <Input
          id="card-number"
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="expiry-date">Expiry Date</Label>
          <Input
            id="expiry-date"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cvv">CVV</Label>
          <Input
            id="cvv"
            placeholder="123"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
      </div>
      <Button 
        type="submit" 
        className="w-full bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300"
      >
        Pay $120 Attendance Fee
      </Button>
    </form>
  )
}