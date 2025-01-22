import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PaymentOptions } from './payment/PaymentOptions'
import { SuccessMessage } from './payment/SuccessMessage'
import { useNavigate } from 'react-router-dom'

declare global {
  interface Window {
    ApplePaySession: any;
  }
}

interface PaymentSectionProps {
  onBack: () => void;
}

export function PaymentSection({ onBack }: PaymentSectionProps) {
  const [isApplePayAvailable, setIsApplePayAvailable] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<'phone' | 'card' | 'apple' | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ApplePaySession && window.ApplePaySession.canMakePayments()) {
      setIsApplePayAvailable(true)
      console.log("Apple Pay is available")
    } else {
      console.log("Apple Pay is not available")
    }
  }, [])

  const handlePaymentSuccess = (method: 'phone' | 'card' | 'apple') => {
    setPaymentSuccess(true)
    setPaymentMethod(method)
  }

  const handleBack = () => {
    navigate('/attendance-fee')
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center tracking-tight text-teal-600">
          Thanks for Choosing<br />
          HD Trade Services
        </CardTitle>
      </CardHeader>
      <CardContent>
        {paymentSuccess ? (
          <SuccessMessage paymentMethod={paymentMethod} />
        ) : (
          <PaymentOptions 
            isApplePayAvailable={isApplePayAvailable}
            onSuccess={handlePaymentSuccess}
          />
        )}
      </CardContent>
    </Card>
  )
}