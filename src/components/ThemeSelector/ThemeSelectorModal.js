import React from 'react';
import './_themeSelector.scss';
import { MdClose } from 'react-icons/md';

const themes = [
    {
        id: 'light',
        name: 'Light',
        colors: ['#f8fafc', '#ffffff', '#2563eb']
    },
    {
        id: 'dark',
        name: 'Dark (Default)',
        colors: ['#0f172a', '#1e293b', '#3b82f6']
    },
    {
        id: 'dracula',
        name: 'Dracula',
        colors: ['#282a36', '#44475a', '#ff79c6']
    },
    {
        id: 'sunset',
        name: 'Sunset',
        colors: ['#4c1d95', '#701a75', '#fb923c']
    },
    {
        id: 'cyberpunk',
        name: 'Cyberpunk',
        colors: ['#09090b', '#18181b', '#22d3ee']
    },
    {
        id: 'forest',
        name: 'Forest',
        colors: ['#064e3b', '#065f46', '#34d399']
    }
];

const ThemeSelectorModal = ({ onClose, currentTheme, setTheme }) => {
    
    // Stop propagation so clicking inside modal doesn't close it
    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="themeModalOverlay" onClick={onClose}>
            <div className="themeModalContainer" onClick={handleModalClick}>
                <div className="themeModalHeader">
                    <h2>Select Aesthetic</h2>
                    <button className="closeButton" onClick={onClose} title="Close">
                        <MdClose size={28} />
                    </button>
                </div>
                <div className="themeGrid">
                    {themes.map(theme => (
                        <div 
                            key={theme.id} 
                            className={`themeCard ${currentTheme === theme.id ? 'active' : ''}`}
                            style={{ backgroundColor: theme.colors[0], color: theme.colors[2] }}
                            onClick={() => {
                                setTheme(theme.id);
                            }}
                        >
                            <div className="colorCircles">
                                <span style={{ backgroundColor: theme.colors[0] }}></span>
                                <span style={{ backgroundColor: theme.colors[1] }}></span>
                                <span style={{ backgroundColor: theme.colors[2] }}></span>
                            </div>
                            <span className="themeName">{theme.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThemeSelectorModal;
