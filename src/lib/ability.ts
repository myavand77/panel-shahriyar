import { AbilityBuilder, createMongoAbility } from "@casl/ability";

export type Actions = "manage" | "read" | "create" | "update" | "delete";
export type Subjects =
  | "all"
  | "Requests"
  | "Orders"
  | "Sellers"
  | "Home"
  | "Settings"
  | "Credit"
  | "Purchase";

export type AppAbility = ReturnType<typeof defineAbilityFor>;

export type UserRole = "Admin" | "Provider" | "User";

export function defineAbilityFor(role: UserRole) {
  const { can, build } = new AbilityBuilder(createMongoAbility);

  switch (role) {
    case "Admin":
      can("manage", "all");
      break;
    case "Provider":
      can(["read", "create", "update"], ["Home", "Orders", "Settings"]);
      break;
    case "User":
      can("read", ["Credit", "Purchase"]);
      can(["read", "create", "update"], ["Settings"]);
      break;
  }

  return build();
}
