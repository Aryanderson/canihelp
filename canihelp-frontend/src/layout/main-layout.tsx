// import { 
//   Outlet, 
//   useLocation 
// } from "react-router-dom";
// import { Toaster } from "@/components/ui/sonner";
// import Header from "@/components/custom/nav-top-header";
// import React from "react";
// import ChatApp from "@/components/ChatApp";
// import { EventDialog } from "@/apps/eventos/components/EventDialog";
// import { toast } from "sonner";
// const EventsDialog = React.lazy(() => import("events/EventsDialog"));

function MainLayout() {  
  //const actualPath = useLocation();
  return (
    <div className="flex flex-col h-full w-screen overflow-x-hidden justify-between gap-4">
        {/* <Header menuVisible={true}/> */}
        <main className="box-border w-full h-full pt-0 p-4 pb-0">
          {/* <Outlet /> */}
        </main>
        {/* <Toaster /> */}
        {/* {!actualPath.pathname.includes("/events") && (
        //   <EventDialog
        //     onOpenChange={()=> false}
        //     isExpanded={true}
        //     selectedEvent={null}
        //     onSuccess={() => toast.success("Evento criado com sucesso!")}
        //   />
          // <React.Suspense 
          // //fallback={<div>Carregando EventsDialog...</div>}
          // >
          //     <EventsDialog
          //       onOpenChange={()=> false}
          //       isExpanded={true}
          //       selectedEvent={null}
          //       onSuccess={() => toast.success("Evento criado com sucesso!")}
          //     />
          //     {/* <Events/> */}
          {/* </React.Suspense> */}
        
        {/* <ChatApp /> */}
    </div>
  );
}

export default MainLayout;