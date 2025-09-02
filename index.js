dotenv.config()

const app = express()

app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );