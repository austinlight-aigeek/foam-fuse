import i18next from "i18next";
import ar from "./navigation-i18n/ar";
import en from "./navigation-i18n/en";
import tr from "./navigation-i18n/tr";

i18next.addResourceBundle("en", "navigation", en);
i18next.addResourceBundle("tr", "navigation", tr);
i18next.addResourceBundle("ar", "navigation", ar);

const navigationConfig = [
  {
    id: "dashboards",
    title: "Dashboards",
    type: "group",
    icon: "heroicons-outline:home",
    translate: "DASHBOARDS",
    children: [
      {
        id: "dashboards.project",
        title: "Project",
        type: "item",
        icon: "heroicons-outline:clipboard-check",
        url: "/dashboards/project",
      },
      {
        id: "dashboards.analytics",
        title: "Analytics",
        type: "item",
        icon: "heroicons-outline:chart-pie",
        url: "/dashboards/analytics",
      },
      {
        id: "apps.chat",
        title: "Chat",
        type: "item",
        icon: "heroicons-outline:chat-alt",
        url: "/apps/chat",
      },
      {
        id: "apps.calendar",
        title: "Calendar",
        subtitle: "3 upcoming events",
        type: "item",
        icon: "heroicons-outline:calendar",
        url: "/apps/calendar",
        translate: "CALENDAR",
      },
      {
        id: "apps.contacts",
        title: "Contacts",
        type: "item",
        icon: "heroicons-outline:user-group",
        url: "/apps/contacts",
        translate: "CONTACTS",
      },
      {
        id: "apps.mailbox",
        title: "Mailbox",
        type: "item",
        icon: "heroicons-outline:mail",
        url: "/apps/mailbox",
        translate: "MAIL",
        badge: {
          title: "27",
          classes: "px-8 bg-pink-600 text-white rounded-full",
        },
      },
      {
        id: "apps.notes",
        title: "Notes",
        type: "item",
        icon: "heroicons-outline:pencil-alt",
        url: "/apps/notes",
        translate: "NOTES",
      },
      {
        id: "apps.scrumboard",
        title: "Scrumboard",
        type: "item",
        icon: "heroicons-outline:view-boards",
        url: "/apps/scrumboard",
        translate: "SCRUMBOARD",
      },
      {
        id: "apps.tasks",
        title: "Tasks",
        subtitle: "12 remaining tasks",
        type: "item",
        icon: "heroicons-outline:check-circle",
        url: "/apps/tasks",
        translate: "TASKS",
      },
      {
        id: "apps.assessment",
        title: "Tasks",
        type: "item",
        icon: "heroicons-outline:clipboard-list",
        url: "/apps/assessment",
        translate: "ASSESSMENT",
      },
    ],
  },
];

export default navigationConfig;
