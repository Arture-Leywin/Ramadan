import { type ReactNode } from "react";

// Crescent moon SVG icon component
export function CrescentMoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M21.5287 15.9294C21.3687 15.6594 20.9187 15.2394 19.7987 15.4394C19.1787 15.5494 18.5487 15.5994 17.9187 15.5694C15.5887 15.4694 13.4787 14.3994 12.0087 12.7494C10.7087 11.2994 9.96873 9.40938 9.96873 7.41938C9.96873 6.25938 10.1987 5.12938 10.6587 4.07938C11.2787 2.68938 10.7187 2.29938 10.4187 2.15938C10.1187 2.01938 9.51873 1.80938 8.34873 2.72938C4.86873 5.24938 3.3487 9.70938 4.5887 13.8394C5.8287 17.9694 9.3987 20.9994 13.6687 21.5694C14.1887 21.6594 14.7187 21.6994 15.2487 21.6994C18.0887 21.6994 20.7487 20.5094 22.6387 18.4494C23.5287 17.4894 23.1787 16.8094 23.0287 16.5094C22.8787 16.2094 22.4187 15.6594 21.5287 15.9294Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Lantern SVG icon component
export function LanternIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M20 10H4C3.45 10 3 9.55 3 9V6C3 5.45 3.45 5 4 5H20C20.55 5 21 5.45 21 6V9C21 9.55 20.55 10 20 10Z" 
        fill="currentColor"
      />
      <path 
        d="M19 3H5C4.45 3 4 2.55 4 2C4 1.45 4.45 1 5 1H19C19.55 1 20 1.45 20 2C20 2.55 19.55 3 19 3Z" 
        fill="currentColor"
      />
      <path 
        d="M18 19H6C5.45 19 5 18.55 5 18V10H19V18C19 18.55 18.55 19 18 19Z" 
        fill="currentColor"
      />
      <path 
        d="M16 23H8C7.45 23 7 22.55 7 22C7 21.45 7.45 21 8 21H16C16.55 21 17 21.45 17 22C17 22.55 16.55 23 16 23Z" 
        fill="currentColor"
      />
    </svg>
  );
}

// Star SVG icon component
export function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
        fill="currentColor"
      />
    </svg>
  );
}
