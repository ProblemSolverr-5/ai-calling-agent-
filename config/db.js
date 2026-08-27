// Mock Database Connection (Aap isay real Mongo/Postgres se badal sakte hain)
const connectDB = async () => {
  try {
    console.log("🗄️ Database Connected Successfully!");
  } catch (error) {
    console.error(`❌ Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;