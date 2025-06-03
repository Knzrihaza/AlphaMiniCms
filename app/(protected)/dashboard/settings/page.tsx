"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { loadSettings, saveSettings } from "@/app/actions/settings";
import { WebsiteSettings } from "@/types/types";




export default function WebsiteSettingsPage() {
  const [settings, setSettings] = useState<WebsiteSettings>({
    allowDownload: true,
    darkMode: false,
    disableRightClick: false,
    enableComments: false,
    enableFavorites: false,
    isPrivate: false,
    maintenanceMode: false,
    metaDescription: "",
    metaKeywords: "",
    passwordProtected: false,
    showMetadata: true,
    siteTitle: "tttjgtttt",
    socialSharing: true,
    watermarkEnabled: false,
  });

  const toggleSetting = (key: keyof WebsiteSettings) => {
    setSettings((prev: WebsiteSettings) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleInputChange = (key: keyof WebsiteSettings, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };



  useEffect(() => {
    async function fetchData() {
      const loaded = await loadSettings();
      console.log("loaded ", loaded)
      if (loaded) {
        setSettings(prev => ({ ...prev, ...loaded }));
      }
      console.log("Chrollolooo", settings)
    }
    fetchData();
  });


  const handleSave = async () => {


    await saveSettings(settings);
    console.log('Settings saved via server action!', settings);
  };

  return (
    <div className="p-6 space-y-6 max-w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Site Settings</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="private">Private Site</Label>
              <Switch id="private" checked={settings.isPrivate} onCheckedChange={() => toggleSetting("isPrivate")} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="maintenance">Maintenance Mode</Label>
              <Switch id="maintenance" checked={settings.maintenanceMode} onCheckedChange={() => toggleSetting("maintenanceMode")} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Gallery Settings</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="download">Enable Downloads</Label>
              <Switch id="download" checked={settings.allowDownload} onCheckedChange={() => toggleSetting("allowDownload")} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="metadata">Show Metadata</Label>
              <Switch id="metadata" checked={settings.showMetadata} onCheckedChange={() => toggleSetting("showMetadata")} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="watermark">Apply Watermark</Label>
              <Switch id="watermark" checked={settings.watermarkEnabled} onCheckedChange={() => toggleSetting("watermarkEnabled")} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="rightClick">Disable Right Click</Label>
              <Switch id="rightClick" checked={settings.disableRightClick} onCheckedChange={() => toggleSetting("disableRightClick")} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>User Interaction</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="comments">Enable Comments</Label>
              <Switch id="comments" checked={settings.enableComments} onCheckedChange={() => toggleSetting("enableComments")} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="favorites">Enable Favorites</Label>
              <Switch id="favorites" checked={settings.enableFavorites} onCheckedChange={() => toggleSetting("enableFavorites")} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="social">Social Sharing</Label>
              <Switch id="social" checked={settings.socialSharing} onCheckedChange={() => toggleSetting("socialSharing")} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="protected">Password-Protected Albums</Label>
              <Switch id="protected" checked={settings.passwordProtected} onCheckedChange={() => toggleSetting("passwordProtected")} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>SEO Settings</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Site Title</Label>
              <Input id="title" placeholder={settings.siteTitle} onChange={(e) => handleInputChange("siteTitle", e.target.value)} />
            </div>
            <div>
              <Label htmlFor="description">Meta Description</Label>
              <Textarea id="description" placeholder="A collection of my best work and projects." onChange={(e) => handleInputChange("metaDescription", e.target.value)} />
            </div>
            <div>
              <Label htmlFor="keywords">Meta Keywords</Label>
              <Input id="keywords" placeholder="photography, design, art" onChange={(e) => handleInputChange("metaKeywords", e.target.value)} />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSave}>Save Settings</Button>
      </div>
    </div>
  );
}
