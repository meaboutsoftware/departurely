/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from "@playwright/test";

test("should navigate to the search page", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page.getByTestId("search-form")).toBeVisible();
});

test("should show connections when cities without special characters", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");

  await page.getByTestId("search-form-from").fill("Wil");
  await page.getByTestId("search-form-to").fill("Lausanne");
  await page.getByTestId("search-form-submit").click();

  await expect(page.getByTestId("connections-header")).toHaveText(
    "Wil -> Lausanne"
  );
  await expect(page.getByTestId("items-list")).toBeVisible();
});

test("should show connections when cities with special characters", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");

  await page.getByTestId("search-form-from").fill("Zürich");
  await page.getByTestId("search-form-to").fill("Genève");
  await page.getByTestId("search-form-submit").click();

  await expect(page.getByTestId("connections-header")).toHaveText(
    "Zürich -> Genève"
  );
  await expect(page.getByTestId("items-list")).toBeVisible();
});

test("should show connections when cities with spaces", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.getByTestId("search-form-from").fill("Zürich HB");
  await page.getByTestId("search-form-to").fill("Wil SG");
  await page.getByTestId("search-form-submit").click();

  await expect(page.getByTestId("connections-header")).toHaveText(
    "Zürich HB -> Wil SG"
  );
  await expect(page.getByTestId("items-list")).toBeVisible();
});

test("should show no results when no connections exist", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.getByTestId("search-form-from").fill("W");
  await page.getByTestId("search-form-to").fill("W");
  await page.getByTestId("search-form-submit").click();

  await expect(page.getByTestId("connections-header")).toHaveText("W -> W");
  await expect(page.getByTestId("no-results")).toBeVisible();
});
