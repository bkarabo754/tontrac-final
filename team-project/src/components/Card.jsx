const Card = ({ children }) => {
  return (
    <div className="p-6 border-2 border-r-8 border-l-8 border-r-destructive border-l-destructive rounded-2xl shadow-2xl bg-background animate-fadeIn">
      {children}
    </div>
  );
};

export default Card;
