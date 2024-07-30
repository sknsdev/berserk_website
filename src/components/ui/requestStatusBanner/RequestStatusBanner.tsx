import React from 'react';

interface BannerProps {
    isSended: boolean;
    message: string;
    onClose: () => void;
}

export const RequestStatusBanner: React.FC<BannerProps> = ({ isSended, message, onClose }) => {
    if (!isSended) return null;

    return (
        <div className="z-50 mx-auto max-w-lg p-4 mb-4 text-white bg-green-500 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
                <span>{message}</span>
                <button onClick={onClose} className="ml-4 text-white hover:text-gray-200">
                    &times;
                </button>
            </div>
        </div>
    );
};