// Wo complex logic jo n8n ke bas ki baat nahi hai
const processHeavyData = (incomingData) => {
  console.log("⚙️ Processing custom logic in VS Code...");

  // Example Logic: Data ko sanitize aur upper-case karna
  const cleanedData = {
    userId: incomingData.user_id || "N/A",
    fullName: incomingData.user_name ? incomingData.user_name.toUpperCase() : "UNKNOWN",
    email: incomingData.user_email || "no-email@provided.com",
    processedAt: new Date().toISOString(),
    system_status: "Verified by Railway Server"
  };

  return cleanedData;
};

module.exports = { processHeavyData };