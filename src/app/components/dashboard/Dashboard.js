import React, { Component } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      layouts: {
        lg: [
          { x: 0, y: 0, w: 1, h: 1, i: "a" },
          { x: 1, y: 0, w: 1, h: 1, i: "b" },
          { x: 2, y: 0, w: 1, h: 1, i: "c" },
          { x: 0, y: 1, w: 1, h: 1, i: "d" },
        ],
      },
      compactType: "vertical",
    };
    console.log(this.state.layouts);
  }
  onRemoveItem() {
    console.log("removing");
  }
  render() {
    return (
      <div className="">
        <div className="row">
          <ResponsiveGridLayout
            className=""
            layouts={this.state.layouts}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 4, md: 3, sm: 2, xs: 1, xxs: 1 }}
            style={{ width: "100%" }}
          >
            <div class="card" key="a" style={{ background: "red" }}>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>
            <div class="card" key="b" style={{ background: "green" }}>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>
            <div class="card" key="c" style={{ background: "blue" }}>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>
            <div class="card" key="d" style={{ background: "brown" }}>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>
          </ResponsiveGridLayout>
        </div>
      </div>
    );
  }
}

export default Dashboard;
