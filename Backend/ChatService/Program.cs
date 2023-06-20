var builder = WebApplication.CreateBuilder(args);

//add services

/*Add signalr #1*/
builder.Services.AddSignalR();
builder.Services.AddCors(options => {
    options.AddDefaultPolicy(builder => {
    builder.WithOrigins("http://localhost:5000")
    .AllowAnyHeader()
    .AllowAnyMethod()
    .AllowCredentials();
    });
});
var app = builder.Build();

app.UseCors();
// app.UseCors(x => x
//         .AllowAnyMethod()
//         .AllowAnyHeader()
//         .SetIsOriginAllowed(origin => true) // allow any origin
//         .AllowCredentials()); // allow credentials

app.MapGet("/", () => "Hello World!");

/*Add signalr #2*/
app.MapHub<ChatService.Hubs.ChatHub>("/chat");
app.Run();
