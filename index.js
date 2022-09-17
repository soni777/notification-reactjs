const Notification = (props) => {
  const { name, children, imageClass, image } = props;
  return (
    <p className={name}>
      <img className={imageClass} src={image} />
      {children}
    </p>
  );
};

const element = (
  <div>
    <h1 className="heading">Notifications</h1>
    <Notification
      name="notify info"
      imageClass="icon"
      image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      children="Information Message"
    />
    <Notification
      name="notify success"
      imageClass="icon"
      image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      children="Success Message"
    />

    <Notification
      name="notify warning"
      imageClass="icon"
      image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      children="Warning Message"
    />

    <Notification
      name="notify danger"
      imageClass="icon"
      image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      children="Error Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
