// In production, change this to your live domain e.g. 'https://yoursite.com/api'
let api_url = 'https://note-forge3.vercel.app/api' // dont forget to change this later


// Temporary text while plans load
const loading = document.createElement("p");
loading.textContent = "Loading plans...";

const plans_container = document.querySelector("#pricing-plans");
plans_container.appendChild(loading);

// Fetch Plans
let data;
async function getplans() {
    try {
        const response = await fetch(`${api_url}/plans`);
        data = await response.json();
    } catch (error) { console.log("Error: ", error); }

    plans_container.removeChild(loading);
    
    for (const plan of data) {
        const card = document.createElement("div");
        card.classList.add("plan", "flex-card");
        
        if (plan.commercial_use) { card.classList.add("commercial") };

        const isCustom = plan.name === "Custom";

        const price = isCustom ? (plan.price ?? "Request") : (plan.name === "Personal" ? "Free" : `$${plan.price}/month`); // !!!
        const commercialUse = plan.commercial_use ? "Yes" : "No";
        const userLimit = plan.user_limit ?? "Unlimited";
        const projectLimit = plan.project_limit ?? "Unlimited";

        const ul = document.createElement("ul");

        for (const feature of plan.features) {
            const li = document.createElement("li");
            li.textContent = feature;
            ul.appendChild(li);
        }

        if (!isCustom) {
            const infoFeatures = [
                `Commercial use: ${commercialUse}`,
                `Users: ${userLimit}`,
                `Projects: ${projectLimit}`
            ];

            for (const info of infoFeatures) {
                const li = document.createElement("li");
                li.textContent = info;
                ul.appendChild(li);
            }
        }

        card.innerHTML = `
            <div class="plan-title">
                <h2><strong>${plan.name}</strong></h2>
                <h4><strong>${price}</strong></h4>
            </div>

            <div class="plan-description">
                <div class="plan-features"></div>
            </div>
        `;

        if (document.getElementById("auth")) {
            const getPlanButton = document.createElement("button");
            getPlanButton.type = "submit";
            getPlanButton.setAttribute("form", "registerForm");
            getPlanButton.name = plan._id;
            getPlanButton.textContent = isCustom ? "Contact sales" : "Get this plan";

            card.querySelector(".plan-description").appendChild(getPlanButton);
        }

        card.querySelector(".plan-features").appendChild(ul);
        plans_container.appendChild(card);
    }
}
getplans();
