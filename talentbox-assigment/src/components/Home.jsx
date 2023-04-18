import React from "react";

const Home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          background:"#00471b"
        }}
      >
        <div>
          <input style={{}} placeholder="Search" />
        </div>
        <div>
          <img
            style={{ width: "100%", height: "60px" }}
            src="data:image/png;base64,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"
            alt="img"
          />
        </div>
        <div style={{ display: "flex" }}>
          <button>Menu</button>
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
