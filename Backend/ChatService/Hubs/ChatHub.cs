using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace ChatService.Hubs{
    public class ChatHub : Hub {
         private readonly string _botUser;
         public ChatHub(){
            _botUser = "myChat bot";
         }
         //this method is called whenver user submit their name and room to join
         public async Task JoinRoom(UserConnection userConnection){
          
          await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.Room);
          await Clients.Group(userConnection.Room).SendAsync("ReceiveMessage", _botUser , $"{userConnection.User} has joined {userConnection.Room}");
          
          // await Clients.All.SendAsync("ReceiveMessage", _botUser , $"{userConnection.User} has joined {userConnection.Room}");
         }

    }
} 