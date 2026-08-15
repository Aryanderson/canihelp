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

import Layout from './layout'

function MainLayout() {
  //const actualPath = useLocation();
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* <Header menuVisible={true}/> */}
      <main className="w-full flex-1 py-4">
        {/* <Layout>
          <Outlet /> 
        </Layout>*/}
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
  )
}

export default MainLayout;