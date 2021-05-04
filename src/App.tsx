import React from "react";

export const App: React.FC = () => {
  const [searchLimit, setSearchLimit] = React.useState(0);

  const handleClick = () => {
    const loopLimit = searchLimit === 0 ? 30 : searchLimit;

    for (let index = 1; index <= loopLimit; index++) {
      window.open(
        `https://www.bing.com/search?q=${index}&form=ANNTH1&refig=7a76f157091043079fe9faae59c22412`
      );
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchLimit(parseInt(event.currentTarget.value, 10));
  };

  return (
    <React.Fragment>
      <ol style={{ maxWidth: "500px" }}>
        <li style={{ marginBottom: "10px" }}>
          Make sure you have signed into your Microsoft account in Edge.
        </li>
        <li style={{ marginBottom: "10px" }}>
          If this is the first time you're using this, it will only open 1 tab
          to begin with. After this tab has opened, come back to this tab and
          enable pop-ups from this URL. After that, it should work.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <a href="https://microsoftedge.microsoft.com/addons/detail/mobile-view-switcher/ihlecoggeaconmpkjmfjeplggdnemakk">
            Install this Microsoft Edge extension.
          </a>{" "}
          Once you have finished the PC searches, enable this extension and
          search again to get the Microsoft Reward points for mobile searches.
        </li>
        <li>
          A search limit is optional. If no limit is entered it will default to
          30 tabs.
        </li>
      </ol>
      <label style={{ marginBottom: "10px", display: "block" }}>
        Set Search Limit:{" "}
        <input type="number" value={searchLimit} onChange={handleChange} />
      </label>
      <button onClick={handleClick}>Get Rewards!</button>
    </React.Fragment>
  );
};

export default App;
