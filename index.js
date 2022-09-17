const Notification = (props) => {
  const { name, children } = props;
  return <div className={name}>{children}</div>;
};

const element = (
  <div>
    <h1 className="heading">Notifications</h1>
    <Notification name="notify info">
      <img
        className="icon"
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      Information Message
    </Notification>
    <Notification name="notify success">
      <img
        className="icon"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      Success Message
    </Notification>

    <Notification name="notify warning">
      <img
        className="icon"
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      Warning Message
    </Notification>

    <Notification name="notify danger">
      <img
        className="icon"
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
      Error Message
    </Notification>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
