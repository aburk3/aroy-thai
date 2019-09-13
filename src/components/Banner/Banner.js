import React from "react";

export default function Banner({ children, title, subtitle }) {
  return (
			/**
				Where name of restaurant will appear.
				When user is on 'location' page, this can show home button.
			 */
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
