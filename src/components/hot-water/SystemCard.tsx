import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { SystemCardProps } from "./types";

export const SystemCard = ({ 
  title, 
  description, 
  brands, 
  advantages,
  sizing,
  keyNotes,
  tips,
  lifespan
}: SystemCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-teal-700">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600">{description}</p>
        
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Trusted Brands</h4>
          <p className="text-gray-600">{brands.join(", ")}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">Advantages</h4>
              <ul className="space-y-2">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <Check className="w-4 h-4 text-teal-500 mr-2" />
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>
            
            {sizing && (
              <div>
                <h4 className="font-semibold text-lg mb-2">Tank Sizing Guide</h4>
                <div className="space-y-2 text-gray-600">
                  {sizing.map((size, index) => (
                    <p key={index}>{size.label}: {size.value}</p>
                  ))}
                </div>
              </div>
            )}

            {(keyNotes || tips || lifespan) && (
              <div className="col-span-2 mt-4">
                {keyNotes && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-lg mb-2">Key Notes</h4>
                    <ul className="space-y-2">
                      {keyNotes.map((note, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <Check className="w-4 h-4 text-teal-500 mr-2" />
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {tips && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-lg mb-2">Tips</h4>
                    <ul className="space-y-2">
                      {tips.map((tip, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <Check className="w-4 h-4 text-teal-500 mr-2" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {lifespan && (
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Expected Lifespan</h4>
                    <p className="text-gray-600">{lifespan}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};