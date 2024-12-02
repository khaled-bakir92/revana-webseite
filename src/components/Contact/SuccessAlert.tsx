import React from 'react';
import { Check } from 'lucide-react';

interface SuccessAlertProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessAlert = ({ isOpen, onClose }: SuccessAlertProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full transform transition-all">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#DFF5E1] rounded-full flex items-center justify-center mb-4">
            <Check className="w-8 h-8 text-[#4CAF50]" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Nachricht gesendet!
          </h3>
          <p className="text-gray-600 mb-6">
            Vielen Dank für Ihre Nachricht. Ich werde mich schnellstmöglich bei Ihnen melden.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#A3D9AC] text-white rounded-lg font-medium 
                    hover:bg-opacity-90 transition-colors"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessAlert;