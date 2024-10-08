import React, { useState } from "react";
import ConnectWalletButton from "../ConnectWalletButton/ConnectWalletButton";
import "./FormNavigation.css";
import { useAuth } from "../../context/AuthContext";
import WalletButton from "../WalletButton/WalletButton";

interface FormNavigationProps {
    activeFormNavigationButton: number;
    onFormNavigationClick: (index: number) => void;
}

const FormNavigation: React.FC<FormNavigationProps> = ({ activeFormNavigationButton, onFormNavigationClick }) => {
    const { identity, authClient, isConnected } = useAuth();

    return (
        <div className="form-navigation">
            <ul className="form-navigation__links">
                <li
                    className={`form-navigation__element ${
                        activeFormNavigationButton === 0 ? "form-navigation__element_active" : ""
                    }`}
                    onClick={() => onFormNavigationClick(0)}
                >
                    <a className="form-navigation__link">New</a>
                </li>
                <li
                    className={`form-navigation__element ${
                        activeFormNavigationButton === 1 ? "form-navigation__element_active" : ""
                    }`}
                    onClick={() => onFormNavigationClick(1)}
                >
                    <a className="form-navigation__link">Portfolio</a>
                </li>
            </ul>
            {isConnected ? <WalletButton /> : <ConnectWalletButton />}
        </div>
    );
};

export default FormNavigation;
