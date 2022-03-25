import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "./service.did.js"

const canisterId = "rrkah-fqaaa-aaaaa-aaaaq-cai";
const agent = new HttpAgent({});
let actor = Actor.createActor(idlFactory, {agent, canisterId: canisterId});

// 本地测试，需要调用这个
agent.fetchRootKey().catch(err=>{
  console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
  console.error(err);
});

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with hello actor, calling the greet method
  const greeting = await actor.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
