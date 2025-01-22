import { ApplePayButton } from './ApplePayButton'
import { PhonePaymentButton } from './PhonePaymentButton'
import { CardPaymentForm } from './CardPaymentForm'

interface PaymentOptionsProps {
  isApplePayAvailable: boolean;
  onSuccess: (method: 'phone' | 'card' | 'apple') => void;
}

export function PaymentOptions({ isApplePayAvailable, onSuccess }: PaymentOptionsProps) {
  return (
    <>
      {isApplePayAvailable && (
        <>
          <ApplePayButton isAvailable={isApplePayAvailable} onSuccess={() => onSuccess('apple')} />
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">or</span>
            </div>
          </div>
        </>
      )}
      <CardPaymentForm onSuccess={() => onSuccess('card')} />
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">or</span>
        </div>
      </div>
      <PhonePaymentButton onSuccess={() => onSuccess('phone')} />
    </>
  )
}