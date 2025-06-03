'use server';

import { logger } from "@/lib/functions";
import client from "@/lib/mongoDb";
import { WebsiteSettings } from "@/types/types";


export async function saveSettings(settings: WebsiteSettings) {
    const db = await client.db("photoGemma");
    console.log(settings)
    await db.collection('settings').updateOne({}, { $set: settings }, { upsert: true });

    await logger(db, "settings:edit", "Edited Settings")

    return { success: true };
}

export async function loadSettings() {
    const db = await client.db("photoGemma");
    const settings = await db.collection('settings').findOne({});
    //console.log("Settings test", settings)
    if (!settings) return null;
    const { ...cleanedSettings } = settings;
    // Serialize the settings to convert complex types
    const serializedSettings = JSON.parse(JSON.stringify(cleanedSettings));
    return serializedSettings;
}




export async function getTitleAndDescription() {
    const db = await client.db("photoGemma");
    const settings = await db.collection("settings").findOne({}, {
        projection: { siteTitle: 1, metaDescription: 1 }
    });

    return {
        title: settings?.siteTitle || "PhotoGemma – Untitled Site",
        description: settings?.metaDescription || "A personal gallery powered by PhotoGemma.",
    };
}
