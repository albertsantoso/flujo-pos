const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); // Body Parser: Mengambil data yang dikirimkan oleh client melalui body;
app.use(express.static("public"));

const PORT = 5000;

app.get("/", (req, res) => {
    res.status(201).send("<h1>Flujo Cashier App</h1>");
});

// Import Router
const {
    usersRouter,
    productsRouter,
    transactionsRouter,
    cartsRouter,
} = require("./routers");

app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/transactions", transactionsRouter);
app.use("/carts", cartsRouter);

app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    const statusMessage = err.message || "Error!";

    return res.status(statusCode).send({
        isError: true,
        message: statusMessage,
        data: null,
    });
});

app.listen(PORT, () => console.log(`API Running on Port ${PORT}`));
