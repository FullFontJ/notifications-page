function Notification( {notification} ) {
  return (
    <div className={"flex flex-row min-w-max mx-3 p-3 rounded-md justify-between " + (!notification.visto && "bg-lightGrayishBlue2") } >
      <div className="flex flex-row">
      <img className="h-9 w-9 rounded-full" src={notification.imagen} />
      <div className="max-w-lg ml-4 flex flex-col">
        <p className="mt-0 mb-0 textcolor text-sm"><strong className="capitalize text-black font-bold">{notification.username}</strong> {notification.accion} <strong className="textcolor-blue font-bold">{notification.procedente}</strong></p>
        <p className=" textcolor-grayishBlue text-xs">{notification.fecha} ago</p>

        { (notification.extraType == "message") && <div className="border-2 mt-1 p-3 text-sm rounded-md">{notification.extraRecurso}</div> }
      </div>
      { !notification.visto && <div className="ml-2 mt-2 h-2 w-2 bgcolor-red rounded-full"></div> }
      </div>
      

      { (notification.extraType == "picture")  && <img className="h-9 w-9 rounded-md justify-self-end" src={ notification.extraRecurso }/> }
    </div>
  );
}

export default Notification;
