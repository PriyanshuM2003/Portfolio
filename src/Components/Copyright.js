import React from "react";

export default function Copyright() {
  const animate = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <footer className="copyright">
        <div className="up" id="up" onClick={animate}>
          <i className="fa fa-chevron-up"></i>
        </div>
        <p>&copy; 2024 Priyanshu Mishra</p>
      </footer>
    </>
  );
}
