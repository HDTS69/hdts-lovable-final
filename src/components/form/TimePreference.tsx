import { Label } from "@/components/ui/label"

interface TimePreferenceProps {
  preferredTime: string
  setPreferredTime: (time: string) => void
}

export function TimePreference({ preferredTime, setPreferredTime }: TimePreferenceProps) {
  return (
    <div className="space-y-0.5">
      <Label className="text-sm">Preferred Time</Label>
      <div className="grid grid-cols-2 gap-0.5">
        {['Morning', 'Afternoon', 'Weekend', 'After Hours'].map((time) => (
          <div key={time} className="flex items-center space-x-1.5 p-1 hover:bg-gray-50 rounded">
            <input
              type="radio"
              id={time.toLowerCase()}
              name="preferredTime"
              value={time}
              checked={preferredTime === time}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="text-teal-500 focus:ring-teal-500 h-3.5 w-3.5"
            />
            <Label htmlFor={time.toLowerCase()} className="text-sm cursor-pointer">{time}</Label>
          </div>
        ))}
      </div>
    </div>
  )
}