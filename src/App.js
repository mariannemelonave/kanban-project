import "./App.css";
import Column from "./components/Column";
import Title from "./components/Title";
import iconInprogress from "./icons/columnTwo/iconInProgress.png";
import iconDone from "./icons/columnFour/iconDone.png";
import Man from "./icons/columnOne/Man.png";
import Female from "./icons/columnTwo/Female.png";

function App() {
  return (
    <div>
      <div>
        <Title></Title>
        <div className="card">
          {/* COLUNA 1 */}
          <div className="card cardOne">
            <Column
              showIcon={false}
              showTitle={true}
              title="To Do"
              name="Christmas Banners"
              img={<img src={Man} alt="Man"></img>}
              textButton={<button className="button bOne">Label</button>}
            ></Column>
            <Column
              showIcon={false}
              showTitle={false}
              name="Redo Portfolio"
              img={<img src={Man} alt="Man"></img>}
              textButton={<button className="button bOne">Label</button>}
            ></Column>
          </div>

          {/* COLUNA 2 */}

          <div className="card cardTwo">
            <Column
              showIcon={true}
              showTitle={true}
              icon={<img src={iconInprogress} alt="In Progress" />}
              title="In Progress"
              name="Coffee Break"
              img={<img src={Man} alt="Man"></img>}
              textButton={<button className="button bTwo">Always</button>}
            ></Column>
            <Column
              showIcon={false}
              showTitle={false}
              name="Updating Portfolio"
              img={<img src={Female} alt="Female"></img>}
              textButton={<button className="button bTwo">Webflow</button>}
            ></Column>
          </div>

          {/* COLUNA 3 */}

          <div className="card cardTree">
            <Column
              showIcon={false}
              showTitle={true}
              title="Review"
              name="Release to Figma Community"
              img={<img src={Man} alt="Man"></img>}
              textButton={<button className="button bTree">Release</button>}
            ></Column>
            <Column
              showIcon={false}
              showTitle={false}
              name="User Feedback"
              img={<img src={Man} alt="Man"></img>}
              textButton={<button className="button bTree">Feedback</button>}
            ></Column>
            <Column
              showIcon={false}
              showTitle={false}
              name="Background images from humaaans.com"
              img={<img src={Man} alt="Man"></img>}
              textButton={<button className="button bTree">Sourcing</button>}
            ></Column>
          </div>

          {/* COLUNA 4 */}

          <div className="card cardFour">
            <Column
              showIcon={true}
              showTitle={true}
              icon={<img src={iconDone} alt="Done" />}
              title="Done"
              name="Style Guide"
              img={<img src={Female} alt="Female"></img>}
              textButton={<button className="button bFour">UI</button>}
            ></Column>
            <Column
              showIcon={false}
              showTitle={false}
              name="Component Library"
              img={<img src={Female} alt="Female"></img>}
              textButton={<button className="button bFour">UI</button>}
            ></Column>
            <Column
              showIcon={false}
              showTitle={false}
              name="Sticker Components"
              img={<img src={Female} alt="Female"></img>}
              textButton={<button className="button bFour">UI</button>}
            ></Column>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;