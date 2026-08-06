import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const route = path === "/" ? "index.html" : `${path.slice(1)}/index.html`;
  return readFile(new URL(`../out/${route}`, import.meta.url), "utf8");
}

test("server-renders the Still marketing page", async () => {
  const html = await render();
  assert.match(html, /Quit drinking\./);
  assert.match(html, /Keep becoming you\./);
  assert.match(html, /Sanjit Rajendiran/);
  assert.match(html, /Private by default/);
  assert.doesNotMatch(html, /react-loading-skeleton|Starter Project/i);
});

for (const [path, text] of [
  ["/support", "Alcohol withdrawal can be dangerous"],
  ["/privacy", "Your recovery is personal"],
  ["/terms", "Clear terms for a product built on trust"],
]) {
  test(`server-renders ${path}`, async () => {
    assert.match(await render(path), new RegExp(text));
  });
}

test("publishes the support contact", async () => {
  assert.match(await render("/support"), /s85191939@gmail\.com/);
});
