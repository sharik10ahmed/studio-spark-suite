import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  ADMIN_CREDENTIALS,
  initialChoreography,
  initialEnquiries,
  initialEvents,
  initialFitness,
  initialGallery,
  initialPrograms,
  initialSettings,
  initialTestimonials,
  type ChoreographyService,
  type Enquiry,
  type FitnessService,
  type GalleryItem,
  type Program,
  type Settings,
  type StudioEvent,
  type Testimonial,
} from "@/data/mock";

export type Collection<T extends { id: string }> = {
  items: T[];
  add: (value: Omit<T, "id">) => void;
  update: (id: string, value: Partial<T>) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;
};

const uid = () => Math.random().toString(36).slice(2, 9);

function useCollection<T extends { id: string; status: string }>(
  initial: T[],
  statuses: [string, string],
): Collection<T> {
  const [items, setItems] = useState<T[]>(initial);

  const add = useCallback((value: Omit<T, "id">) => {
    setItems((prev) => [{ ...(value as T), id: uid() }, ...prev]);
  }, []);

  const update = useCallback((id: string, value: Partial<T>) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...value } : item)));
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const toggle = useCallback(
    (id: string) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? ({ ...item, status: item.status === statuses[0] ? statuses[1] : statuses[0] } as T)
            : item,
        ),
      );
    },
    [statuses],
  );

  return { items, add, update, remove, toggle };
}

type StudioContextValue = {
  settings: Settings;
  updateSettings: (value: Partial<Settings>) => void;
  programs: Collection<Program>;
  fitness: Collection<FitnessService>;
  choreography: Collection<ChoreographyService>;
  gallery: Collection<GalleryItem>;
  events: Collection<StudioEvent>;
  testimonials: Collection<Testimonial>;
  enquiries: Collection<Enquiry>;
  addEnquiry: (value: Omit<Enquiry, "id" | "date" | "status">) => void;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const StudioContext = createContext<StudioContextValue | null>(null);

const ACTIVE: [string, string] = ["active", "inactive"];
const PUBLISHED: [string, string] = ["published", "draft"];

export function StudioProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(initialSettings);
  const [isAuthenticated, setAuthenticated] = useState(false);

  const programs = useCollection<Program>(initialPrograms, ACTIVE);
  const fitness = useCollection<FitnessService>(initialFitness, ACTIVE);
  const choreography = useCollection<ChoreographyService>(initialChoreography, ACTIVE);
  const gallery = useCollection<GalleryItem>(initialGallery, ACTIVE);
  const events = useCollection<StudioEvent>(initialEvents, PUBLISHED);
  const testimonials = useCollection<Testimonial>(initialTestimonials, PUBLISHED);
  const enquiries = useCollection<Enquiry>(initialEnquiries, ["New", "Closed"]);

  const updateSettings = useCallback((value: Partial<Settings>) => {
    setSettings((prev) => ({ ...prev, ...value }));
  }, []);

  const addEnquiry = useCallback(
    (value: Omit<Enquiry, "id" | "date" | "status">) => {
      enquiries.add({
        ...value,
        status: "New",
        date: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
      } as Omit<Enquiry, "id">);
    },
    [enquiries],
  );

  const login = useCallback((email: string, password: string) => {
    const ok =
      email.trim().toLowerCase() === ADMIN_CREDENTIALS.email &&
      password === ADMIN_CREDENTIALS.password;
    if (ok) setAuthenticated(true);
    return ok;
  }, []);

  const logout = useCallback(() => setAuthenticated(false), []);

  const value = useMemo<StudioContextValue>(
    () => ({
      settings,
      updateSettings,
      programs,
      fitness,
      choreography,
      gallery,
      events,
      testimonials,
      enquiries,
      addEnquiry,
      isAuthenticated,
      login,
      logout,
    }),
    [
      settings,
      updateSettings,
      programs,
      fitness,
      choreography,
      gallery,
      events,
      testimonials,
      enquiries,
      addEnquiry,
      isAuthenticated,
      login,
      logout,
    ],
  );

  return <StudioContext.Provider value={value}>{children}</StudioContext.Provider>;
}

export function useStudio() {
  const ctx = useContext(StudioContext);
  if (!ctx) throw new Error("useStudio must be used inside StudioProvider");
  return ctx;
}
