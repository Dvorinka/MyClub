import React, { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Link,
  Divider,
  Code,
  OrderedList,
  HStack,
  IconButton,
  useColorModeValue,
  useToast,
  VStack,
  Badge,
  SimpleGrid,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import {
  FaLink,
  FaArrowUp,
  FaCog,
  FaNewspaper,
  FaFutbol,
  FaUsers,
  FaImage,
  FaPhotoVideo,
  FaFolderOpen,
  FaHandshake,
  FaEnvelope,
  FaAward,
  FaSyncAlt,
  FaVideo,
  FaCalendarAlt,
  FaPalette,
  FaCommentAlt,
  FaKey,
  FaSearch,
  FaBug,
  FaLightbulb,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTachometerAlt,
  FaChartLine,
  FaAddressBook,
  FaChalkboard,
  FaMobileAlt,
  FaInfoCircle,
  FaListOl,
  FaBook,
  FaBookOpen,
  FaComments,
  FaClipboardList,
  FaBolt,
  FaEdit,
  FaPaintBrush,
  FaLifeRing,
} from 'react-icons/fa';
import AdminLayout from '../../layouts/AdminLayout';

const AdminDocsPage: React.FC = () => {
  const sections = useMemo(
    () => [
      { id: 'uvod', label: 'Úvod a přehled', icon: FaLightbulb },
      { id: 'nastaveni', label: 'Nastavení klubu', icon: FaCog },
      { id: 'dashboard', label: 'Dashboard a přehledy', icon: FaTachometerAlt },
      { id: 'clanky', label: 'Články a kategorie', icon: FaNewspaper },
      { id: 'zapasy', label: 'Zápasy a tabulky', icon: FaFutbol },
      { id: 'hraci-tymy', label: 'Hráči a týmy', icon: FaUsers },
      { id: 'media', label: 'Média a soubory', icon: FaPhotoVideo },
      { id: 'gallery', label: 'Galerie', icon: FaImage },
      { id: 'files', label: 'Správa souborů', icon: FaFolderOpen },
      { id: 'sponzori-bannery', label: 'Sponzoři a bannery', icon: FaHandshake },
      { id: 'newsletter', label: 'Newsletter a e-maily', icon: FaEnvelope },
      { id: 'aliasy', label: 'Alias soutěží', icon: FaAward },
      { id: 'prefetch', label: 'Prefetch a cache', icon: FaSyncAlt },
      { id: 'videa', label: 'Videa', icon: FaVideo },
      { id: 'aktivity', label: 'Aktivity', icon: FaCalendarAlt },
      { id: 'merch', label: 'Oblečení', icon: FaPalette },
      { id: 'zpravy', label: 'Zprávy', icon: FaCommentAlt },
      { id: 'contacts', label: 'Kontakty a formuláře', icon: FaAddressBook },
      { id: 'analytics', label: 'Analytics a reporty', icon: FaChartLine },
      { id: 'scoreboard', label: 'Tabule (Scoreboard)', icon: FaChalkboard },
      { id: 'mobile-scoreboard', label: 'Mobilní scoreboard', icon: FaMobileAlt },
      { id: 'uzivatele', label: 'Uživatelé a přístupy', icon: FaKey },
      { id: 'docs', label: 'Interní dokumentace', icon: FaInfoCircle },
      { id: 'checklist', label: 'Checklisty a postupy', icon: FaListOl },
      { id: 'seo', label: 'SEO a metadata', icon: FaSearch },
      { id: 'troubleshooting', label: 'Řešení problémů', icon: FaBug },
    ],
    []
  );

  const [activeId, setActiveId] = useState<string>('');
  const toast = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as Element[];
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    if (activeId) {
      try {
        localStorage.setItem('adminDocs:lastAnchor', activeId);
      } catch {}
    }
  }, [activeId]);

  useEffect(() => {
    const t = setTimeout(() => {
      const hash = (window.location.hash || '').replace('#', '').trim();
      let targetId = hash;
      if (!targetId) {
        try {
          targetId = localStorage.getItem('adminDocs:lastAnchor') || '';
        } catch {}
      }
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveId(targetId);
        }
      }
    }, 50);
    return () => clearTimeout(t);
  }, []);

  const copyDeepLink = async (id: string) => {
    try {
      const url = `${window.location.origin}${window.location.pathname}#${id}`;
      await navigator.clipboard.writeText(url);
      toast({
        title: 'Odkaz zkopírován',
        status: 'success',
        duration: 1500,
        isClosable: true,
      });
    } catch {
      toast({
        title: 'Nelze zkopírovat odkaz',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const tocActiveColor = useColorModeValue('blue.700', 'blue.300');
  const tocActiveBg = useColorModeValue('blue.50', 'blue.900');
  const bgCard = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const SectionHeader = ({ id, icon, title }: { id: string; icon: any; title: string }) => (
    <HStack align="center" justify="space-between" mb={4} id={id} scrollMarginTop="100px">
      <HStack spacing={3}>
        <Box p={2} bg={useColorModeValue('blue.50', 'blue.900')} borderRadius="lg">
          <Icon as={icon} color={useColorModeValue('blue.600', 'blue.300')} boxSize={5} />
        </Box>
        <Heading size="lg" color={useColorModeValue('gray.800', 'white')}>
          {title}
        </Heading>
      </HStack>
      <IconButton
        aria-label="Zkopírovat odkaz"
        variant="ghost"
        size="sm"
        icon={<FaLink />}
        onClick={() => copyDeepLink(id)}
        borderRadius="full"
      />
    </HStack>
  );

  return (
    <AdminLayout>
      <Box maxW="1400px" mx="auto">
        <Box
          display={{ base: 'block', lg: 'grid' }}
          gridTemplateColumns={{ base: '1fr', lg: '280px 1fr' }}
          gap={8}
        >
          {/* Sticky TOC */}
          <Box display={{ base: 'none', lg: 'block' }}>
            <Box position="sticky" top="100px" maxH="calc(100vh - 120px)" overflowY="auto">
              <Box bg={bgCard} p={5} borderRadius="xl" borderWidth="1px" borderColor={borderColor} shadow="md">
                <HStack mb={4} spacing={2}>
                  <Icon as={FaBook} color={useColorModeValue('blue.600', 'blue.300')} boxSize={4} />
                  <Heading size="sm" color={useColorModeValue('gray.700', 'gray.200')}>
                    Rychlá navigace
                  </Heading>
                </HStack>
                <VStack spacing={1.5} align="stretch">
                  {sections.map((s) => (
                    <Link
                      key={s.id}
                      href={`#${s.id}`}
                      display="flex"
                      alignItems="center"
                      px={3}
                      py={2.5}
                      borderRadius="lg"
                      bg={activeId === s.id ? tocActiveBg : 'transparent'}
                      color={activeId === s.id ? tocActiveColor : 'inherit'}
                      fontWeight={activeId === s.id ? 'semibold' : 'medium'}
                      fontSize="sm"
                      _hover={{ bg: tocActiveBg, textDecoration: 'none' }}
                      transition="all 0.2s"
                      onClick={(e) => {
                        e.preventDefault();
                        try {
                          localStorage.setItem('adminDocs:lastAnchor', s.id);
                        } catch {}
                        const el = document.getElementById(s.id);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                          window.history.pushState(null, '', `#${s.id}`);
                        }
                      }}
                    >
                      <Icon as={s.icon} mr={2.5} boxSize={4} />
                      <Text flex={1}>{s.label}</Text>
                    </Link>
                  ))}
                </VStack>
              </Box>
            </Box>
          </Box>

          {/* Main content */}
          <Box>
            <Box bg={bgCard} p={8} borderRadius="xl" borderWidth="1px" borderColor={borderColor} shadow="sm">
              <Box id="top" mb={4} />
              <Box mb={8}>
                <HStack mb={3} spacing={3}>
                  <Icon as={FaBookOpen} color={useColorModeValue('blue.600', 'blue.400')} boxSize={10} />
                  <Heading size="2xl">Dokumentace</Heading>
                </HStack>
                <Text color="gray.600" fontSize="lg" mb={6}>
                  Kompletní průvodce administrací vašeho klubového webu - vytvořeno pro každého, i bez technických znalostí
                </Text>

                <Alert status="info" borderRadius="lg" variant="left-accent" mb={4}>
                  <AlertIcon />
                  <Box>
                    <AlertTitle fontSize="md">Vítejte v admin panelu!</AlertTitle>
                    <AlertDescription fontSize="sm">
                      Tato dokumentace vás krok za krokem provede všemi funkcemi systému. Pro rychlý start
                      doporučujeme začít{' '}
                      <Link href="#nastaveni" color="blue.600" fontWeight="semibold">
                        nastavením klubu
                      </Link>
                      .
                    </AlertDescription>
                  </Box>
                </Alert>

                <Alert status="success" borderRadius="lg" variant="left-accent">
                  <AlertIcon />
                  <Box>
                    <AlertTitle fontSize="md">
                      <HStack spacing={2} display="inline-flex">
                        <Icon as={FaComments} boxSize={4} />
                        <Text as="span">Potřebujete pomoc nebo vlastní úpravy?</Text>
                      </HStack>
                    </AlertTitle>
                    <AlertDescription fontSize="sm">
                      <strong>Technická podpora:</strong> Máte-li jakékoli dotazy nebo narazíte na problém, napište nám na{' '}
                      <Link href="mailto:help@tdvorak.dev" color="blue.600" fontWeight="bold">
                        help@tdvorak.dev
                      </Link>
                      {' '}— odpovídáme do 24 hodin.
                      <br />
                      <strong>Vlastní úpravy:</strong> Hledáte specifické funkce nebo přizpůsobení webu vašim potřebám? 
                      Kontaktujte nás a společně zjistíme, zda je vaše představa realizovatelná. 
                      Rádi vám pomůžeme!
                    </AlertDescription>
                  </Box>
                </Alert>
              </Box>

              <Divider my={8} />

              {/* ÚVOD Section */}
              <Box id="uvod" scrollMarginTop="100px">
                <SectionHeader id="uvod" icon={FaLightbulb} title="Úvod a přehled" />
                
                <VStack align="stretch" spacing={4} mb={8}>
                  <Text fontSize="md" color="gray.700">
                    Tento administrační systém vám umožňuje jednoduše spravovat kompletní klubový web — od článků, přes
                    zápasy a výsledky, až po newsletter a galerie. <strong>Není potřeba žádné programování ani technické znalosti.</strong> Vše je navrženo tak, aby to zvládl každý člen klubu.
                  </Text>

                  <Box
                    p={4}
                    bg={useColorModeValue('blue.50', 'blue.900')}
                    borderRadius="lg"
                    borderLeftWidth="4px"
                    borderLeftColor="blue.500"
                  >
                    <Text fontSize="md" color="blue.800" fontWeight="medium">
                      <strong>Co můžete dělat:</strong> Přidávat články, spravovat zápasy, nahrávat fotky do galerie, 
                      posílat newslettery fanouškům, upravovat vzhled webu a mnoho dalšího. Vše přehledně na jednom místě.
                    </Text>
                  </Box>

                  <HStack mt={4} mb={2} spacing={2}>
                    <Icon as={FaBolt} color={useColorModeValue('orange.500', 'orange.300')} boxSize={4} />
                    <Heading size="sm">Rychlé odkazy na nejpoužívanější sekce</Heading>
                  </HStack>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
                    {[
                      { icon: FaNewspaper, title: 'Články', desc: 'Publikujte novinky a reportáže', link: '/admin/clanky' },
                      { icon: FaFutbol, title: 'Zápasy', desc: 'Automatické načítání z FAČR', link: '/admin/zapasy' },
                      { icon: FaUsers, title: 'Hráči a týmy', desc: 'Správa soupisek', link: '/admin/hraci' },
                      { icon: FaImage, title: 'Galerie', desc: 'Fotogalerie a alba', link: '/admin/galerie' },
                      { icon: FaPhotoVideo, title: 'Média', desc: 'Nahrávání obrázků a souborů', link: '/admin/soubory' },
                      { icon: FaEnvelope, title: 'Newsletter', desc: 'E-mailové kampaně', link: '/admin/newsletter' },
                      { icon: FaCog, title: 'Nastavení klubu', desc: 'Logo, barvy, kontakty', link: '/admin/nastaveni' },
                      { icon: FaHandshake, title: 'Sponzoři', desc: 'Správa partnerů klubu', link: '/admin/sponzori' },
                      { icon: FaVideo, title: 'Videa', desc: 'YouTube a další videa', link: '/admin/videa' },
                      { icon: FaCalendarAlt, title: 'Aktivity', desc: 'Kalendář akcí', link: '/admin/aktivity' },
                      { icon: FaChartLine, title: 'Analytics', desc: 'Statistiky návštěvnosti', link: '/admin/analytika' },
                      { icon: FaSyncAlt, title: 'Prefetch', desc: 'Aktualizace dat z FAČR', link: '/admin/prefetch' },
                    ].map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.link}
                        _hover={{ textDecoration: 'none' }}
                      >
                        <HStack
                          p={4}
                          bg={useColorModeValue('gray.50', 'gray.700')}
                          borderRadius="lg"
                          borderWidth="1px"
                          borderColor={borderColor}
                          _hover={{ shadow: 'md', transform: 'translateY(-2px)', borderColor: 'blue.400' }}
                          transition="all 0.2s"
                          cursor="pointer"
                        >
                          <Box p={2} bg="blue.50" borderRadius="md">
                            <Icon as={item.icon} color="blue.600" boxSize={5} />
                          </Box>
                          <VStack align="start" spacing={0} flex={1}>
                            <Text fontWeight="semibold" fontSize="sm">
                              {item.title}
                            </Text>
                            <Text fontSize="xs" color="gray.500">
                              {item.desc}
                            </Text>
                          </VStack>
                        </HStack>
                      </Link>
                    ))}
                  </SimpleGrid>

                  <Alert status="info" borderRadius="lg" mt={4}>
                    <AlertIcon />
                    <Box>
                      <AlertTitle fontSize="sm">
                        <HStack spacing={2} display="inline-flex">
                          <Icon as={FaLightbulb} boxSize={3} />
                          <Text as="span">Tip pro začátečníky</Text>
                        </HStack>
                      </AlertTitle>
                      <AlertDescription fontSize="sm">
                        Pokud jste zde poprvé, začněte v pořadí: <strong>1) Nastavení</strong> (vyplňte název klubu a logo), 
                        <strong>2) Média</strong> (nahrajte pár obrázků), <strong>3) Články</strong> (vytvořte první příspěvek). 
                        Zbytek můžete prozkoumávat postupně!
                      </AlertDescription>
                    </Box>
                  </Alert>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* NASTAVENÍ Section */}
              <Box>
                <SectionHeader id="nastaveni" icon={FaCog} title="Nastavení klubu" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Alert status="warning" borderRadius="lg">
                    <AlertIcon />
                    <Text fontSize="sm">
                      <strong><Icon as={FaExclamationTriangle} boxSize={3} display="inline" mr={1} />Začněte zde!</strong> Nastavení je první, co byste měli vyplnit. Ovlivňuje
                      vzhled webu, e-maily, načítání zápasů a další funkce. Bez správného nastavení web nebude fungovat optimálně.
                    </Text>
                  </Alert>

                  <Link href="/admin/nastaveni" isExternal>
                    <HStack
                      p={3}
                      bg={useColorModeValue('blue.50', 'blue.900')}
                      borderRadius="lg"
                      _hover={{ bg: useColorModeValue('blue.100', 'blue.800') }}
                      transition="all 0.2s"
                    >
                      <Icon as={FaCog} color="blue.600" boxSize={5} />
                      <Text fontWeight="bold" color="blue.700">
                        → Otevřít Nastavení klubu
                      </Text>
                    </HStack>
                  </Link>

                  <HStack mt={2} spacing={2}>
                    <Icon as={FaClipboardList} color={useColorModeValue('blue.600', 'blue.300')} boxSize={4} />
                    <Heading size="sm">Co nastavit? (Krok za krokem)</Heading>
                  </HStack>
                  <OrderedList spacing={3} pl={5}>
                    <ListItem>
                      <strong>Název klubu</strong> — Plný název vašeho fotbalového klubu (zobrazuje se v záhlaví webu, e-mailech a všude na stránkách)
                    </ListItem>
                    <ListItem>
                      <strong>Logo klubu</strong> — Nejdříve nahrajte logo do sekce{' '}
                      <Link href="/admin/soubory" color="blue.600" fontWeight="bold">
                        Média
                      </Link>
                      , poté zkopírujte adresu obrázku (URL) a vložte ji sem
                    </ListItem>
                    <ListItem>
                      <strong>Barvy</strong> — Primární barva (hlavní barva klubu) a sekundární barva (doplňková). Použijte barevné kódy jako např. #FF0000 pro červenou
                    </ListItem>
                    <ListItem>
                      <strong>SMTP nastavení (pro e-maily)</strong> — Nutné pro odesílání newsletterů a automatických e-mailů. Potřebujete: 
                      adresu serveru (host), port (465 nebo 587), uživatelské jméno a heslo
                    </ListItem>
                    <ListItem>
                      <strong>FAČR údaje</strong> — Club ID a Club Type získáte z{' '}
                      <Link href="https://is.fotbal.cz" color="blue.600" isExternal>
                        is.fotbal.cz
                      </Link>
                      . Tyto údaje slouží k automatickému načítání zápasů a tabulek
                    </ListItem>
                    <ListItem>
                      <strong>Sociální sítě</strong> — Vložte odkazy na Facebook, Instagram, YouTube profily klubu. Ikony se zobrazí v patičce webu
                    </ListItem>
                    <ListItem>
                      <strong>Kontaktní údaje</strong> — E-mail, telefon a adresa klubu pro kontaktní stránku
                    </ListItem>
                  </OrderedList>

                  <Box
                    p={4}
                    bg={useColorModeValue('blue.50', 'blue.900')}
                    borderRadius="lg"
                    borderLeftWidth="4px"
                    borderLeftColor="blue.500"
                  >
                    <HStack spacing={2} mb={2}>
                      <Icon as={FaLightbulb} color="blue.600" />
                      <Text fontWeight="semibold" color="blue.800">
                        Tip pro SMTP (e-mailové nastavení)
                      </Text>
                    </HStack>
                    <Text fontSize="sm" color="blue.700" mb={2}>
                      <strong>Port 465</strong> používá SSL zabezpečení, <strong>port 587</strong> používá STARTTLS. 
                    </Text>
                    <Text fontSize="sm" color="blue.700">
                      <strong>Používáte Gmail?</strong> Gmail vyžaduje „App Password" (heslo aplikace), ne vaše běžné heslo! 
                      Nastavte si ho v Google Account → Security → 2-Step Verification → App passwords.
                    </Text>
                  </Box>

                  <Box
                    p={4}
                    bg={useColorModeValue('green.50', 'green.900')}
                    borderRadius="lg"
                    borderLeftWidth="4px"
                    borderLeftColor="green.500"
                  >
                    <HStack spacing={2} mb={2}>
                      <Icon as={FaLightbulb} color="green.600" />
                      <Text fontWeight="semibold" color="green.800">
                        Nejste si jistí některým nastavením?
                      </Text>
                    </HStack>
                    <Text fontSize="sm" color="green.700">
                      Žádný problém! Napište nám na{' '}
                      <Link href="mailto:help@tdvorak.dev" color="green.600" fontWeight="bold">
                        help@tdvorak.dev
                      </Link>
                      {' '}a pomůžeme vám se vším nastavit. Odpovídáme do 24 hodin.
                    </Text>
                  </Box>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* DASHBOARD Section */}
              <Box>
                <SectionHeader id="dashboard" icon={FaTachometerAlt} title="Dashboard a přehledy" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Hned po přihlášení najdete v sekci{' '}
                    <Link href="/admin" color="blue.600">Dashboard</Link> souhrn nejdůležitějších informací o webu a klubu.
                  </Text>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    {[{
                      title: 'Rychlý přehled',
                      desc: 'Poslední články, plán zápasů, e-mailové statistiky.'
                    }, {
                      title: 'Akční dlaždice',
                      desc: 'Tlačítka pro vytvoření článku, spuštění prefetch nebo import aliasů.'
                    }, {
                      title: 'Notifikace',
                      desc: 'Varování na chybějící nastavení nebo neúspěšné importy.'
                    }, {
                      title: 'Widget aktivit',
                      desc: 'Seznam nejbližších akcí z kalendáře aktivit.'
                    }].map((item, idx) => (
                      <Box
                        key={idx}
                        p={4}
                        borderWidth="1px"
                        borderColor={borderColor}
                        borderRadius="lg"
                        bg={useColorModeValue('gray.50', 'gray.700')}
                      >
                        <Heading size="sm" mb={2}>{item.title}</Heading>
                        <Text fontSize="sm" color="gray.600">{item.desc}</Text>
                      </Box>
                    ))}
                  </SimpleGrid>
                  <Alert status="info" borderRadius="lg">
                    <AlertIcon />
                    <Text fontSize="sm">
                      Dashboard vychází z real-time dat. Pokud něco chybí, spusťte{' '}
                      <Link href="/admin/prefetch" color="blue.600">Prefetch</Link> nebo obnovte stránku.
                    </Text>
                  </Alert>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* ČLÁNKY Section */}
              <Box>
                <SectionHeader id="clanky" icon={FaNewspaper} title="Články a kategorie" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Články jsou hlavní způsob, jak komunikovat s fanoušky. Můžete publikovat novinky,
                    reportáže, rozhovory a další obsah. Je to jednoduché jako psaní příspěvku na Facebook!
                  </Text>

                  <Link href="/admin/clanky" isExternal>
                    <HStack
                      p={3}
                      bg={useColorModeValue('blue.50', 'blue.900')}
                      borderRadius="lg"
                      _hover={{ bg: useColorModeValue('blue.100', 'blue.800') }}
                      transition="all 0.2s"
                    >
                      <Icon as={FaNewspaper} color="blue.600" boxSize={5} />
                      <Text fontWeight="bold" color="blue.700">
                        → Otevřít Články
                      </Text>
                    </HStack>
                  </Link>

                  <Accordion allowToggle>
                    <AccordionItem borderColor={borderColor}>
                      <h3>
                        <AccordionButton _expanded={{ bg: 'blue.50', color: 'blue.700' }}>
                          <HStack flex="1" textAlign="left" fontWeight="semibold">
                            <Icon as={FaEdit} boxSize={4} />
                            <Text>Jak vytvořit článek? (Krok za krokem)</Text>
                          </HStack>
                          <AccordionIcon />
                        </AccordionButton>
                      </h3>
                      <AccordionPanel pb={4}>
                        <OrderedList spacing={2}>
                          <ListItem>
                            Otevřete sekci{' '}
                            <Link href="/admin/clanky" color="blue.600" fontWeight="bold">
                              Články
                            </Link>
                          </ListItem>
                          <ListItem>Klikněte na zelené tlačítko „Vytvořit článek" (vpravo nahoře)</ListItem>
                          <ListItem>
                            <strong>Vyplňte název článku</strong> — např. "Vítězství 3:1 proti Sokolu"
                          </ListItem>
                          <ListItem>
                            <strong>Napište obsah</strong> — Můžete psát normální text. Pro pokročilé: podporován HTML/Markdown formát
                          </ListItem>
                          <ListItem>
                            <strong>Vyberte kategorii</strong> — např. "Zápasy", "Aktuality", "Rozhovory". Pokud kategorie neexistuje, vytvořte novou
                          </ListItem>
                          <ListItem>
                            <strong>Přidejte hlavní obrázek</strong> — Nejprve nahrajte obrázek do{' '}
                            <Link href="/admin/soubory" color="blue.600" fontWeight="bold">Média</Link>, 
                            poté zkopírujte jeho adresu (URL) a vložte ji do pole "Obrázek"
                          </ListItem>
                          <ListItem>
                            <strong>Vyplňte SEO titulek a popis</strong> — Pomáhá návštěvníkům najít článek přes Google
                          </ListItem>
                          <ListItem>
                            <strong>Zaškrtněte „Publikovat"</strong> pokud chcete článek hned zveřejnit. Pokud ne, můžete ho uložit jako koncept
                          </ListItem>
                          <ListItem>Klikněte na „Uložit" — Hotovo! <Icon as={FaCheckCircle} boxSize={3} display="inline" color="green.500" /></ListItem>
                        </OrderedList>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem borderColor={borderColor}>
                      <h3>
                        <AccordionButton>
                          <HStack flex="1" textAlign="left" fontWeight="semibold">
                            <Icon as={FaPaintBrush} boxSize={4} />
                            <Text>Jak přidat obrázky a videa do článku?</Text>
                          </HStack>
                          <AccordionIcon />
                        </AccordionButton>
                      </h3>
                      <AccordionPanel pb={4}>
                        <Text mb={2} fontSize="sm">
                          <strong>Pro obrázky:</strong>
                        </Text>
                        <OrderedList spacing={2} fontSize="sm">
                          <ListItem>Nahrajte obrázek v sekci <Link href="/admin/soubory" color="blue.600">Média</Link></ListItem>
                          <ListItem>Zkopírujte adresu obrázku (např. <Code>/uploads/2025/01/foto.jpg</Code>)</ListItem>
                          <ListItem>V editoru článku použijte HTML: <Code>&lt;img src="/uploads/2025/01/foto.jpg" alt="Popis" /&gt;</Code></ListItem>
                        </OrderedList>
                        <Text mt={3} mb={2} fontSize="sm">
                          <strong>Pro YouTube videa:</strong>
                        </Text>
                        <Text fontSize="sm">
                          Zkopírujte YouTube odkaz a vložte přímo do obsahu, nebo použijte HTML embed kód z YouTube.
                        </Text>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem borderColor={borderColor}>
                      <h3>
                        <AccordionButton>
                          <HStack flex="1" textAlign="left" fontWeight="semibold">
                            <Icon as={FaSearch} boxSize={4} />
                            <Text>SEO optimalizace (pro lepší viditelnost)</Text>
                          </HStack>
                          <AccordionIcon />
                        </AccordionButton>
                      </h3>
                      <AccordionPanel pb={4}>
                        <Text fontSize="sm" mb={3}>
                          SEO pomáhá lidem najít vaše články přes Google. Vyplňte tyto pole:
                        </Text>
                        <List spacing={2} styleType="disc" pl={5}>
                          <ListItem>
                            <strong>SEO Titulek:</strong> 50-60 znaků, obsahuje klíčová slova (např. "FK Dvorinka zvítězil 3:1 - reportáž ze zápasu")
                          </ListItem>
                          <ListItem>
                            <strong>SEO Popis:</strong> 150-160 znaků, krátké shrnutí článku pro Google výsledky
                          </ListItem>
                          <ListItem>
                            <strong>URL Slug:</strong> Krátký text bez diakritiky, s pomlčkami (např. "vitezstvi-3-1-sokol")
                          </ListItem>
                          <ListItem>
                            <strong>Obrázek:</strong> Optimalizujte velikost (max 1MB, ideálně 1200x630 px)
                          </ListItem>
                        </List>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>

                  <Alert status="success" borderRadius="lg" mt={2}>
                    <AlertIcon />
                    <Box>
                      <AlertTitle fontSize="sm">
                        <HStack spacing={2} display="inline-flex">
                          <Icon as={FaLightbulb} boxSize={3} />
                          <Text as="span">Tip: Kategorie</Text>
                        </HStack>
                      </AlertTitle>
                      <AlertDescription fontSize="sm">
                        Vytvořte si kategorie jako "Zápasy", "Aktuality", "Mládež", "Rozhovory" atd. 
                        Pomohou fanouškům rychle najít konkrétní typ obsahu!
                      </AlertDescription>
                    </Box>
                  </Alert>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* ZÁPASY Section */}
              <Box>
                <SectionHeader id="zapasy" icon={FaFutbol} title="Zápasy a tabulky" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Veškerá data o zápasech, tabulkách a výsledcích se <strong>automaticky načítají z FAČR</strong> (Fotbalová asociace ČR). 
                    Nemusíte nic zadávat ručně — stačí správné nastavení a systém vše stáhne sám!
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
                    <Link href="/admin/zapasy" isExternal>
                      <HStack
                        p={3}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        borderRadius="lg"
                        _hover={{ bg: useColorModeValue('blue.100', 'blue.800') }}
                        transition="all 0.2s"
                      >
                        <Icon as={FaFutbol} color="blue.600" boxSize={5} />
                        <Text fontWeight="bold" color="blue.700">
                          → Zobrazit zápasy
                        </Text>
                      </HStack>
                    </Link>
                    <Link href="/admin/prefetch" isExternal>
                      <HStack
                        p={3}
                        bg={useColorModeValue('green.50', 'green.900')}
                        borderRadius="lg"
                        _hover={{ bg: useColorModeValue('green.100', 'green.800') }}
                        transition="all 0.2s"
                      >
                        <Icon as={FaSyncAlt} color="green.600" boxSize={5} />
                        <Text fontWeight="bold" color="green.700">
                          → Aktualizovat data (Prefetch)
                        </Text>
                      </HStack>
                    </Link>
                  </SimpleGrid>

                  <HStack mt={2} spacing={2}>
                    <Icon as={FaCog} color={useColorModeValue('blue.600', 'blue.300')} boxSize={4} />
                    <Heading size="sm">Jak nastavit automatické načítání zápasů?</Heading>
                  </HStack>
                  <OrderedList spacing={2} pl={5}>
                    <ListItem>
                      Přejděte do{' '}
                      <Link href="/admin/nastaveni" color="blue.600" fontWeight="bold">Nastavení</Link> klubu
                    </ListItem>
                    <ListItem>
                      Najděte sekci <strong>"FAČR údaje"</strong>
                    </ListItem>
                    <ListItem>
                      Vyplňte <strong>Club ID</strong> a <strong>Club Type</strong> (získáte z{' '}
                      <Link href="https://is.fotbal.cz" color="blue.600" isExternal>is.fotbal.cz</Link>)
                    </ListItem>
                    <ListItem>
                      Uložte nastavení a spusťte{' '}
                      <Link href="/admin/prefetch" color="blue.600" fontWeight="bold">Prefetch</Link> pro načtení dat
                    </ListItem>
                    <ListItem>
                      Hotovo! Zápasy a tabulky se budou automaticky aktualizovat <Icon as={FaCheckCircle} boxSize={3} display="inline" color="green.500" />
                    </ListItem>
                  </OrderedList>

                  <Box
                    p={4}
                    bg={useColorModeValue('blue.50', 'blue.900')}
                    borderRadius="lg"
                    borderLeftWidth="4px"
                    borderLeftColor="blue.500"
                  >
                    <HStack spacing={2} mb={2}>
                      <Icon as={FaLightbulb} color="blue.600" />
                      <Text fontWeight="semibold" color={useColorModeValue('blue.800', 'blue.200')}>
                        Co jsou aliasy soutěží?
                      </Text>
                    </HStack>
                    <Text fontSize="sm" color={useColorModeValue('blue.700', 'blue.200')} mb={2}>
                      Z FAČR někdy přicházejí dlouhé a nepřehledné názvy soutěží. V sekci{' '}
                      <Link href="/admin/aliasy-soutezi" color="blue.600" fontWeight="bold">
                        Alias soutěží
                      </Link>{' '}
                      si můžete názvy zkrátit a upravit, jak se mají zobrazovat na webu.
                    </Text>
                    <Text fontSize="xs" color={useColorModeValue('blue.600', 'blue.300')}>
                      Příklad: "I. A třída skupina B - muži" → "I.A třída"
                    </Text>
                  </Box>

                  <Alert status="info" borderRadius="lg">
                    <AlertIcon />
                    <Box>
                      <AlertTitle fontSize="sm">
                        <HStack spacing={2} display="inline-flex">
                          <Icon as={FaSyncAlt} boxSize={3} />
                          <Text as="span">Aktualizace dat</Text>
                        </HStack>
                      </AlertTitle>
                      <AlertDescription fontSize="sm">
                        Data se automaticky aktualizují pravidelně. Pokud potřebujete aktualizovat hned, 
                        použijte tlačítko v sekci{' '}
                        <Link href="/admin/prefetch" color="blue.600" fontWeight="bold">Prefetch</Link>.
                      </AlertDescription>
                    </Box>
                  </Alert>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* HRÁČI A TÝMY Section */}
              <Box>
                <SectionHeader id="hraci-tymy" icon={FaUsers} title="Hráči a týmy" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Udržujte seznam týmů a hráčů aktuální, aby fanoušci i trenéři měli okamžitý
                    přehled o soupisce.
                  </Text>
                  <List spacing={2} styleType="disc" pl={5}>
                    <ListItem>
                      V sekci{' '}
                      <Link href="/admin/tymy" color="blue.600">Týmy</Link> spravujete základní údaje a
                      fotografie.
                    </ListItem>
                    <ListItem>
                      Hráče přiřazujte k týmům, doplňte čísla dresů, pozice a profilové obrázky.
                    </ListItem>
                    <ListItem>
                      V případě chybně načtených log či názvů využijte{' '}
                      <Link href="/admin/aliasy-soutezi" color="blue.600">aliasy soutěží</Link> nebo manuální
                      úpravy týmů.
                    </ListItem>
                  </List>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* MÉDIA Section */}
              <Box>
                <SectionHeader id="media" icon={FaPhotoVideo} title="Média a soubory" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Sekce Média je vaše <strong>centrální úložiště pro všechny obrázky, loga a soubory</strong>. 
                    Vše, co nahrajete zde, můžete pak použít v článcích, bannerech, newsletterech nebo na stránce O klubu.
                  </Text>

                  <Link href="/admin/soubory" isExternal>
                    <HStack
                      p={3}
                      bg={useColorModeValue('blue.50', 'blue.900')}
                      borderRadius="lg"
                      _hover={{ bg: useColorModeValue('blue.100', 'blue.800') }}
                      transition="all 0.2s"
                    >
                      <Icon as={FaPhotoVideo} color="blue.600" boxSize={5} />
                      <Text fontWeight="bold" color="blue.700">
                        → Otevřít Média
                      </Text>
                    </HStack>
                  </Link>

                  <HStack mt={2} spacing={2}>
                    <Icon as={FaPhotoVideo} color={useColorModeValue('blue.600', 'blue.300')} boxSize={4} />
                    <Heading size="sm">Jak nahrát obrázek nebo soubor?</Heading>
                  </HStack>
                  <OrderedList spacing={2} pl={5}>
                    <ListItem>
                      Otevřete sekci{' '}
                      <Link href="/admin/soubory" color="blue.600" fontWeight="bold">Média</Link>
                    </ListItem>
                    <ListItem>
                      Klikněte na tlačítko <strong>"Nahrát soubor"</strong> nebo <strong>"Upload"</strong>
                    </ListItem>
                    <ListItem>
                      Vyberte obrázek ze svého počítače (doporučené formáty: JPG, PNG, max 5 MB)
                    </ListItem>
                    <ListItem>
                      Po nahrání se zobrazí <strong>adresa souboru</strong> (URL) — např. <Code>/uploads/2025/01/foto.jpg</Code>
                    </ListItem>
                    <ListItem>
                      <strong>Zkopírujte tuto adresu</strong> a použijte ji tam, kde potřebujete (články, nastavení loga atd.)
                    </ListItem>
                  </OrderedList>

                  <Box
                    p={4}
                    bg={useColorModeValue('blue.50', 'blue.900')}
                    borderRadius="lg"
                    borderLeftWidth="4px"
                    borderLeftColor="blue.500"
                  >
                    <HStack spacing={2} mb={2}>
                      <Icon as={FaLightbulb} color="blue.600" />
                      <Text fontWeight="semibold" color={useColorModeValue('blue.800', 'blue.200')}>
                        Tipy pro práci s obrázky
                      </Text>
                    </HStack>
                    <List spacing={1} styleType="disc" pl={5} fontSize="sm" color={useColorModeValue('blue.700', 'blue.200')}>
                      <ListItem>
                        <strong>Optimalizujte velikost:</strong> Ideální šířka 1200-2000 px, velikost souboru max 1 MB
                      </ListItem>
                      <ListItem>
                        <strong>Používejte popisné názvy:</strong> např. "zapas-sokol-2025-01.jpg" místo "IMG_1234.jpg"
                      </ListItem>
                      <ListItem>
                        <strong>Formáty:</strong> JPG pro fotky, PNG pro loga s průhledností
                      </ListItem>
                      <ListItem>
                        <strong>Záloha:</strong> Důležité fotky si uchovávejte i lokálně na počítači
                      </ListItem>
                    </List>
                  </Box>

                  <Alert status="warning" borderRadius="lg">
                    <AlertIcon />
                    <Box>
                      <AlertTitle fontSize="sm">
                        <HStack spacing={2} display="inline-flex">
                          <Icon as={FaExclamationTriangle} boxSize={3} />
                          <Text as="span">Pozor při mazání souborů!</Text>
                        </HStack>
                      </AlertTitle>
                      <AlertDescription fontSize="sm">
                        Než smažete obrázek, ověřte, že ho nepoužíváte v článcích, bannerech nebo jinde na webu. 
                        Po smazání se místo obrázku zobrazí chybová hlášká (404).
                      </AlertDescription>
                    </Box>
                  </Alert>

                  <Alert status="info" borderRadius="lg">
                    <AlertIcon />
                    <Box>
                      <AlertTitle fontSize="sm">
                        <HStack spacing={2} display="inline-flex">
                          <Icon as={FaFolderOpen} boxSize={3} />
                          <Text as="span">Správa souborů</Text>
                        </HStack>
                      </AlertTitle>
                      <AlertDescription fontSize="sm">
                        Pro pokročilou správu všech nahraných souborů použijte sekci{' '}
                        <Link href="/admin/files" color="blue.600" fontWeight="bold">Soubory</Link>, 
                        kde vidíte celkový přehled, velikosti a můžete je filtrovat.
                      </AlertDescription>
                    </Box>
                  </Alert>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* GALLERY Section */}
              <Box>
                <SectionHeader id="gallery" icon={FaImage} title="Galerie" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    V sekci Galerie spravujete fotografie z akcí, zápasů a dalších klubových událostí. 
                    Můžete využít propojení se službou Zonerama nebo nahrávat fotky přímo.
                  </Text>

                  <Link href="/admin/gallery" isExternal>
                    <HStack
                      p={3}
                      bg={useColorModeValue('blue.50', 'blue.900')}
                      borderRadius="lg"
                      _hover={{ bg: useColorModeValue('blue.100', 'blue.800') }}
                      transition="all 0.2s"
                    >
                      <Icon as={FaImage} color="blue.600" boxSize={5} />
                      <Text fontWeight="bold" color="blue.700">
                        → Otevřít Galerii
                      </Text>
                    </HStack>
                  </Link>

                  <HStack mt={2} spacing={2}>
                    <Icon as={FaImage} color={useColorModeValue('blue.600', 'blue.300')} boxSize={4} />
                    <Heading size="sm">Jak přidat fotogalerii?</Heading>
                  </HStack>
                  <OrderedList spacing={2} pl={5}>
                    <ListItem>
                      Otevřete sekci{' '}
                      <Link href="/admin/gallery" color="blue.600" fontWeight="bold">Galerie</Link>
                    </ListItem>
                    <ListItem>Klikněte na „Přidat album" nebo „Vytvořit galerii"</ListItem>
                    <ListItem>
                      <strong>Vyplňte název alba</strong> — např. "Zápas proti Spartaku 15.10.2025"
                    </ListItem>
                    <ListItem>
                      <strong>Přidejte popis</strong> — krátký text, co fotky zobrazují
                    </ListItem>
                    <ListItem>
                      <strong>Nahrajte náhledový obrázek</strong> — reprezentativní foto, které se zobrazí jako náhled
                    </ListItem>
                    <ListItem>
                      <strong>Propojte se Zoneramou</strong> (volitelné) — Pokud máte fotky na Zonerama.cz, vložte odkaz na album
                    </ListItem>
                    <ListItem>Uložte album — zobrazí se fanouškům na webu! <Icon as={FaCheckCircle} boxSize={3} display="inline" color="green.500" /></ListItem>
                  </OrderedList>

                  <Box
                    p={4}
                    bg={useColorModeValue('purple.50', 'purple.900')}
                    borderRadius="lg"
                    borderLeftWidth="4px"
                    borderLeftColor="purple.500"
                  >
                    <HStack spacing={2} mb={2}>
                      <Icon as={FaInfoCircle} color="purple.600" />
                      <Text fontWeight="semibold" color={useColorModeValue('purple.800', 'purple.200')}>
                        Co je Zonerama?
                      </Text>
                    </HStack>
                    <Text fontSize="sm" color={useColorModeValue('purple.700', 'purple.200')}>
                      Zonerama je český fotoserver, kde můžete zdarma ukládat fotky. Pokud tam už máte fotogalerie, 
                      můžete je propojit s vaším webem a nemusíte je nahrávat znovu! Stačí vložit odkaz.
                    </Text>
                  </Box>

                  <Alert status="info" borderRadius="lg">
                    <AlertIcon />
                    <Box>
                      <AlertTitle fontSize="sm">
                        <HStack spacing={2} display="inline-flex">
                          <Icon as={FaLightbulb} boxSize={3} />
                          <Text as="span">Tip pro organizaci</Text>
                        </HStack>
                      </AlertTitle>
                      <AlertDescription fontSize="sm">
                        Vytvářejte alba systematicky: "Sezóna 2024/25 - Domácí zápasy", "Letní soustředění 2025" atd. 
                        Fanouškům se pak lépe hledají konkrétní fotky!
                      </AlertDescription>
                    </Box>
                  </Alert>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* FILES Section */}
              <Box>
                <SectionHeader id="files" icon={FaFolderOpen} title="Správa souborů" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Sekce <Link href="/admin/files" color="blue.600">Soubory</Link> nabízí přehled všech nahraných položek včetně velikosti
                    a data nahrání.
                  </Text>
                  <OrderedList spacing={2} pl={5}>
                    <ListItem>Filtrujte podle typu souboru nebo názvu – snadno najdete starší materiály.</ListItem>
                    <ListItem>Stáhněte soubor přímo z administrace pro lokální zálohu.</ListItem>
                    <ListItem>Při hromadném úklidu postupujte opatrně a držte se doporučení v `FILES_MANAGEMENT_SYSTEM.md`.</ListItem>
                  </OrderedList>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* SPONZOŘI Section */}
              <Box>
                <SectionHeader id="sponzori-bannery" icon={FaHandshake} title="Sponzoři a bannery" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Zobrazujte partnery klubu a spravujte reklamní plochy na webu i v newsletterech.
                  </Text>
                  <List spacing={2} styleType="disc" pl={5}>
                    <ListItem>
                      V sekci{' '}
                      <Link href="/admin/sponzori" color="blue.600">Sponzoři</Link> přidejte logo, odkaz a
                      pořadí zobrazení.
                    </ListItem>
                    <ListItem>
                      Bannery vkládejte přes{' '}
                      <Link href="/admin/bannery" color="blue.600">Bannery</Link>; nastavte cílovou URL a
                      období platnosti.
                    </ListItem>
                    <ListItem>
                      Statistiky prokliku sledujte v sekci{' '}
                      <Link href="/admin/analytics" color="blue.600">Analytics</Link>.
                    </ListItem>
                  </List>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* NEWSLETTER Section */}
              <Box>
                <SectionHeader id="newsletter" icon={FaEnvelope} title="Newsletter a e-maily" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Newsletter vám umožňuje posílat hromadné e-maily všem fanouškům, kteří se k odběru přihlásili. 
                    Ideální pro oznámení o zápasech, akcích nebo důležité informace o klubu.
                  </Text>

                  <Link href="/admin/newsletter" isExternal>
                    <HStack
                      p={3}
                      bg={useColorModeValue('blue.50', 'blue.900')}
                      borderRadius="lg"
                      _hover={{ bg: useColorModeValue('blue.100', 'blue.800') }}
                      transition="all 0.2s"
                    >
                      <Icon as={FaEnvelope} color="blue.600" boxSize={5} />
                      <Text fontWeight="bold" color="blue.700">
                        → Otevřít Newsletter
                      </Text>
                    </HStack>
                  </Link>

                  <Alert status="warning" borderRadius="lg">
                    <AlertIcon />
                    <Box>
                      <AlertTitle fontSize="sm">
                        <HStack spacing={2} display="inline-flex">
                          <Icon as={FaExclamationTriangle} boxSize={3} />
                          <Text as="span">Před odesláním newsletteru</Text>
                        </HStack>
                      </AlertTitle>
                      <AlertDescription fontSize="sm">
                        <strong>Vždy nejprve otestujte e-mail na své adrese!</strong> Zkontrolujte, že vše vypadá dobře, 
                        že nejsou překlepy a že obrázky se zobrazují správně. Až pak odešlete všem.
                      </AlertDescription>
                    </Box>
                  </Alert>

                  <HStack spacing={2}>
                    <Icon as={FaEnvelope} color={useColorModeValue('blue.600', 'blue.300')} boxSize={4} />
                    <Heading size="sm">Postup: Jak odeslat newsletter?</Heading>
                  </HStack>
                  <OrderedList spacing={2} pl={5}>
                    <ListItem>
                      <strong>Zkontrolujte SMTP nastavení</strong> — Musí být správně vyplněné v{' '}
                      <Link href="/admin/nastaveni" color="blue.600" fontWeight="bold">Nastavení</Link>. 
                      Bez něj e-maily nepůjdou odeslat!
                    </ListItem>
                    <ListItem>
                      Otevřete{' '}
                      <Link href="/admin/newsletter" color="blue.600" fontWeight="bold">
                        Newsletter
                      </Link>
                    </ListItem>
                    <ListItem>
                      <strong>Vyplňte předmět e-mailu</strong> — např. "Pozvánka na zápas s Technikou Brno"
                    </ListItem>
                    <ListItem>
                      <strong>Napište obsah</strong> — Můžete použít normální text nebo HTML formátování pro hezčí vzhled
                    </ListItem>
                    <ListItem>
                      <strong>DŮLEŽITÉ: Pošlete testovací e-mail</strong> — Klikněte na „Odeslat test" a zadejte svou e-mailovou adresu. 
                      Zkontrolujte, jak e-mail vypadá
                    </ListItem>
                    <ListItem>
                      Pokud vše vypadá dobře, klikněte na <strong>„Odeslat všem"</strong> — e-mail se rozešle všem přihlášeným
                    </ListItem>
                  </OrderedList>

                  <Box
                    p={4}
                    bg={useColorModeValue('blue.50', 'blue.900')}
                    borderRadius="lg"
                    borderLeftWidth="4px"
                    borderLeftColor="blue.500"
                  >
                    <HStack spacing={2} mb={2}>
                      <Icon as={FaLightbulb} color="blue.600" />
                      <Text fontWeight="semibold" color={useColorModeValue('blue.800', 'blue.200')}>
                        Tipy pro úspěšný newsletter
                      </Text>
                    </HStack>
                    <List spacing={1} styleType="disc" pl={5} fontSize="sm" color={useColorModeValue('blue.700', 'blue.200')}>
                      <ListItem>Pište stručně a jasně — čtenáři mají málo času</ListItem>
                      <ListItem>Používejte poutavý předmět — zvýší to šanci, že e-mail otevřou</ListItem>
                      <ListItem>Přidávejte odkazy na web pro více informací</ListItem>
                      <ListItem>Neposílejte newslettery příliš často (doporučeno: max 1-2x týdně)</ListItem>
                    </List>
                  </Box>

                  <Box
                    p={4}
                    bg={useColorModeValue('orange.50', 'orange.900')}
                    borderRadius="lg"
                    borderLeftWidth="4px"
                    borderLeftColor="orange.500"
                  >
                    <HStack spacing={2} mb={2}>
                      <Icon as={FaExclamationTriangle} color="orange.600" />
                      <Text fontWeight="semibold" color={useColorModeValue('orange.800', 'orange.200')}>
                        Problém s odesíláním?
                      </Text>
                    </HStack>
                    <Text fontSize="sm" color={useColorModeValue('orange.700', 'orange.200')}>
                      Pokud e-maily nejdou odeslat nebo padají do spamu, napište nám na{' '}
                      <Link href="mailto:help@tdvorak.dev" color="orange.600" fontWeight="bold">
                        help@tdvorak.dev
                      </Link>
                      {' '}a pomůžeme vám nastavit SMTP a další pokročilé věci (SPF, DKIM záznamy).
                    </Text>
                  </Box>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* ALIASY Section */}
              <Box>
                <SectionHeader id="aliasy" icon={FaAward} title="Alias soutěží" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Alias správa slouží pro přejmenování soutěží importovaných z FAČR tak, aby byly na
                    webu srozumitelné a jednotné.
                  </Text>
                  <OrderedList spacing={2} pl={5}>
                    <ListItem>
                      Otevřete{' '}
                      <Link href="/admin/aliasy-soutezi" color="blue.600">Alias soutěží</Link>.
                    </ListItem>
                    <ListItem>
                      Využijte automatický import ze souborů cache (tlačítko „Importovat ze soutěží").
                    </ListItem>
                    <ListItem>
                      Upravte aliasy ručně nebo přetáhněte pořadí pro prioritní soutěže.
                    </ListItem>
                  </OrderedList>
                  <Alert status="info" borderRadius="lg">
                    <AlertIcon />
                    <Text fontSize="sm">
                      Každá změna se propíše na front-end během několika sekund po uložení.
                    </Text>
                  </Alert>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* PREFETCH Section */}
              <Box>
                <SectionHeader id="prefetch" icon={FaSyncAlt} title="Prefetch a cache" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Prefetch vytváří lokální cache dat (zápasy, videa, články) a výrazně zrychluje
                    načítání webu.
                  </Text>
                  <OrderedList spacing={2} pl={5}>
                    <ListItem>
                      V sekci{' '}
                      <Link href="/admin/prefetch" color="blue.600">Prefetch</Link> zkontrolujte poslední běh
                      a stav jednotlivých modulů.
                    </ListItem>
                    <ListItem>
                      Spusťte ručně po větších obsahových změnách nebo při neaktuálních datech.
                    </ListItem>
                    <ListItem>
                      Sledujte upozornění na chybějící tokeny či API klíče (např. YouTube). Bez nich se data
                      neobnoví.
                    </ListItem>
                  </OrderedList>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* VIDEA Section */}
              <Box>
                <SectionHeader id="videa" icon={FaVideo} title="Videa" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Integrace s YouTube a dalšími platformami umožňuje vkládat playlisty i jednotlivá
                    videa.
                  </Text>
                  <List spacing={2} styleType="disc" pl={5}>
                    <ListItem>
                      Přidávejte videa v sekci{' '}
                      <Link href="/admin/videa" color="blue.600">Videa</Link> pomocí URL nebo ID videa.
                    </ListItem>
                    <ListItem>
                      Aktivujte automatický import playlistu přes{' '}
                      <Link href="/admin/prefetch" color="blue.600">Prefetch</Link>.
                    </ListItem>
                    <ListItem>
                      Náhledy se ukládají do cache; při problémech spusťte znovu Prefetch modul Videa.
                    </ListItem>
                  </List>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* AKTIVITY Section */}
              <Box>
                <SectionHeader id="aktivity" icon={FaCalendarAlt} title="Aktivity" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Klubové akce, tréninky a mimo-soutěžní události můžete prezentovat v kalendáři i na
                    úvodní stránce.
                  </Text>
                  <OrderedList spacing={2} pl={5}>
                    <ListItem>
                      V sekci{' '}
                      <Link href="/admin/aktivity" color="blue.600">Aktivity</Link> nastavte datum, místo a
                      krátký popis.
                    </ListItem>
                    <ListItem>
                      Přidejte obrázek nebo ikonu pro lepší vizuální zobrazení.
                    </ListItem>
                    <ListItem>
                      Aktivitu označte jako veřejnou, chcete-li ji zobrazit na webu.
                    </ListItem>
                  </OrderedList>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* MERCH Section */}
              <Box>
                <SectionHeader id="merch" icon={FaPalette} title="Oblečení" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Spravujte položky klubového merche a informujte fanoušky o dostupnosti zboží.
                  </Text>
                  <List spacing={2} styleType="disc" pl={5}>
                    <ListItem>
                      Přidejte položky v{' '}
                      <Link href="/admin/merch" color="blue.600">Oblečení</Link> s popisem, cenou a fotkou.
                    </ListItem>
                    <ListItem>
                      Využijte štítky pro kategorizaci (např. "dresy", "fan shop").
                    </ListItem>
                    <ListItem>
                      Sledujte zájem fanoušků přes kontaktní formulář nebo dedikovaný e-shop.
                    </ListItem>
                  </List>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* ZPRÁVY Section */}
              <Box>
                <SectionHeader id="zpravy" icon={FaCommentAlt} title="Zprávy" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Zprávy zahrnují kontaktní formuláře, přihlášky a další komunikaci směrem ke klubu.
                  </Text>
                  <List spacing={2} styleType="disc" pl={5}>
                    <ListItem>
                      V{' '}
                      <Link href="/admin/zpravy" color="blue.600">Zprávách</Link> vidíte přijaté zprávy a jejich
                      stav.
                    </ListItem>
                    <ListItem>
                      Odpovídejte z vlastní e-mailové schránky; systém uchovává historii pouze informativně.
                    </ListItem>
                    <ListItem>
                      Označte vyřízené zprávy pro přehlednost týmu.
                    </ListItem>
                  </List>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* CONTACTS Section */}
              <Box>
                <SectionHeader id="contacts" icon={FaAddressBook} title="Kontakty a formuláře" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    V sekci{' '}
                    <Link href="/admin/kontakty" color="blue.600">Kontakty</Link> spravujete kontaktní údaje klubu a odpovědné osoby pro
                    jednotlivé typy dotazů.
                  </Text>
                  <OrderedList spacing={2} pl={5}>
                    <ListItem>Zadejte telefon, e-mail a roli pro každého kontaktního pracovníka.</ListItem>
                    <ListItem>
                      U formulářů lze nastavit cílovou e-mailovou adresu a potvrzovací zprávu.
                    </ListItem>
                    <ListItem>
                      Zkontrolujte oddíl <Link href="/admin/zpravy" color="blue.600">Zprávy</Link>, zda se odesílané formuláře ukládají správně.
                    </ListItem>
                  </OrderedList>
                  <Alert status="info" borderRadius="lg">
                    <AlertIcon />
                    <Text fontSize="sm">
                      Kontaktní údaje se propisují do patičky webu i do automatických e-mailů.
                    </Text>
                  </Alert>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* ANALYTICS Section */}
              <Box>
                <SectionHeader id="analytics" icon={FaChartLine} title="Analytics a reporty" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Sekce{' '}
                    <Link href="/admin/analytika" color="blue.600">Analytics</Link> kombinuje statistiky z Umami a interních metrik systému.
                    Sledujte návštěvnost, interakce a výkon jednotlivých stránek.
                  </Text>
                  <List spacing={2} styleType="disc" pl={5}>
                    <ListItem>Přehled návštěv podle časového období a zdrojů.</ListItem>
                    <ListItem>Top články, nejčtenější kategorie a popularita videí.</ListItem>
                    <ListItem>Informace o přihláškách k newsletteru a konverzích formulářů.</ListItem>
                  </List>
                  <Box
                    p={4}
                    bg={useColorModeValue('green.50', 'green.900')}
                    borderRadius="lg"
                    borderLeftWidth="4px"
                    borderLeftColor="green.500"
                  >
                    <Text fontSize="sm" color={useColorModeValue('green.700', 'green.200')}>
                      Podrobný postup integrace najdete v souboru `UMAMI_SETUP_WITH_CLUB_NAME.md`. Doporučujeme
                      nastavit i `UMAMI_ADMIN_EXCLUSION.md`, aby se nezapočítávaly administrátorské návštěvy.
                    </Text>
                  </Box>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* SCOREBOARD Section */}
              <Box>
                <SectionHeader id="scoreboard" icon={FaChalkboard} title="Tabule (Scoreboard)" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Scoreboard v{' '}
                    <Link href="/admin/scoreboard" color="blue.600">Tabuli</Link> používá data ze zápasů a umožňuje připravit grafiku na
                    klubové obrazovky.
                  </Text>
                  <OrderedList spacing={2} pl={5}>
                    <ListItem>Vyberte soutěž a konkrétní zápas pro zobrazení.</ListItem>
                    <ListItem>Nastavte barevné téma v souladu s brandingem klubu.</ListItem>
                    <ListItem>Exportujte URL pro sdílení na velkoplošných displejích.</ListItem>
                  </OrderedList>
                  <Alert status="warning" borderRadius="lg">
                    <AlertIcon />
                    <Text fontSize="sm">
                      Scoreboard vyžaduje aktuální data z FAČR. Pokud se zápas nezobrazuje, ověřte nastavení v
                      sekci <Link href="/admin/aliasy-soutezi" color="blue.600">Alias soutěží</Link> a spusťte Prefetch.
                    </Text>
                  </Alert>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* MOBILE SCOREBOARD Section */}
              <Box>
                <SectionHeader id="mobile-scoreboard" icon={FaMobileAlt} title="Mobilní scoreboard" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Pro ovládání tabule na dálku použijte{' '}
                    <Link href="/admin/scoreboard/remote" color="blue.600">Mobilní scoreboard</Link>. Umožňuje aktualizovat skóre v průběhu
                    utkání přímo z telefonu.
                  </Text>
                  <List spacing={2} styleType="disc" pl={5}>
                    <ListItem>Přihlaste se stejným účtem jako v administraci.</ListItem>
                    <ListItem>Vyberte zápas, který sledujete, a nastavte skóre i čas.</ListItem>
                    <ListItem>
                      Ověřte internetové připojení – změny se synchronizují okamžitě na veřejné tabuli.
                    </ListItem>
                  </List>
                  <Alert status="success" borderRadius="lg">
                    <AlertIcon />
                    <Text fontSize="sm">
                      Funkce je optimalizovaná pro PWA. Přidejte si ji na domovskou obrazovku pro rychlý přístup.
                    </Text>
                  </Alert>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* UŽIVATELÉ Section */}
              <Box>
                <SectionHeader id="uzivatele" icon={FaKey} title="Uživatelé a přístupy" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Spravujte přístupy administrátorů i redaktorů, nastavujte role a resetujte hesla.
                  </Text>
                  <OrderedList spacing={2} pl={5}>
                    <ListItem>
                      V{' '}
                      <Link href="/admin/uzivatele" color="blue.600">Uživatelích</Link> přidejte nové účty a
                      přidělte roli <Code>admin</Code> nebo <Code>user</Code>.
                    </ListItem>
                    <ListItem>
                      Pro reset hesla využijte nástroj{' '}
                      <Link href="/admin/users/send-reset" color="blue.600">Odeslat reset</Link>.
                    </ListItem>
                    <ListItem>
                      Doporučujeme zapnout dvoufaktorové ověření na e-mailových účtech administrátorů.
                    </ListItem>
                  </OrderedList>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* DOCS Section */}
              <Box>
                <SectionHeader id="docs" icon={FaInfoCircle} title="Interní dokumentace" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    V repozitáři najdete rozsáhlé manuály k jednotlivým oblastem. Doporučujeme projít alespoň tyto:
                  </Text>
                  <List spacing={2} styleType="disc" pl={5}>
                    <ListItem>
                      <Code>FRONTEND_FUNCTIONALITY_REPORT.md</Code> – podrobný popis veřejného webu.
                    </ListItem>
                    <ListItem>
                      <Code>BACKEND_FUNCTIONALITY_REPORT.md</Code> – vysvětlení API a datových toků.
                    </ListItem>
                    <ListItem>
                      <Code>NEWSLETTER_SYSTEM.md</Code> a <Code>FILES_MANAGEMENT_SYSTEM.md</Code> – detailní pracovní postupy.
                    </ListItem>
                  </List>
                  <Alert status="info" borderRadius="lg">
                    <AlertIcon />
                    <Text fontSize="sm">
                      Kompletní seznam manuálů najdete v adresáři `docs/` (kořen projektu). Dokumenty jsou průběžně
                      aktualizované – sledujte datum poslední revize.
                    </Text>
                  </Alert>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* CHECKLIST Section */}
              <Box>
                <SectionHeader id="checklist" icon={FaListOl} title="Checklisty a postupy" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Pro rychlé spuštění nových funkcí využijte připravené checklisty. Najdete je v kořenovém adresáři
                    projektu a v administraci slouží jako doplněk k této dokumentaci.
                  </Text>
                  <OrderedList spacing={2} pl={5}>
                    <ListItem>
                      <Code>NEWSLETTER_FEATURE_CHECKLIST.md</Code> – krok za krokem konfigurace newsletteru.
                    </ListItem>
                    <ListItem>
                      <Code>FILES_MANAGEMENT_TESTING.md</Code> – co ověřit, než nasadíte novou sadu souborů.
                    </ListItem>
                    <ListItem>
                      <Code>MAP_IMPORT_COMPLETE_IMPLEMENTATION.md</Code> a související checklisty pro import mapových dat.
                    </ListItem>
                  </OrderedList>
                  <Alert status="success" borderRadius="lg">
                    <AlertIcon />
                    <Text fontSize="sm">
                      Checklisty si můžete stáhnout jako PDF a sdílet v rámci klubu – usnadníte tak zaškolení nových
                      členů týmu.
                    </Text>
                  </Alert>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* SEO Section */}
              <Box>
                <SectionHeader id="seo" icon={FaSearch} title="SEO a Analytics" />
                <VStack align="stretch" spacing={4} mb={6}>
                  <Text>
                    Správné SEO nastavení a analytika vám pomůžou sledovat návštěvnost webu a
                    optimalizovat obsah.
                  </Text>
                  <List spacing={2} styleType="disc" pl={5}>
                    <ListItem>
                      U každého článku vyplňte <strong>SEO titulek</strong>, <strong>SEO popis</strong> a slug
                      bez diakritiky.
                    </ListItem>
                    <ListItem>
                      Integrujte službu{' '}
                      <Link href="/admin/analytics" color="blue.600">Umami Analytics</Link> dle průvodce v
                      souboru `UMAMI_SETUP_WITH_CLUB_NAME.md`.
                    </ListItem>
                    <ListItem>
                      Pro sociální sítě doplňte Open Graph a Twitter metatagy v nastavení.
                    </ListItem>
                  </List>
                  <Alert status="success" borderRadius="lg">
                    <AlertIcon />
                    <Text fontSize="sm">
                      Auditujte SEO pravidelně — jednoduché úpravy nadpisů a popisů výrazně zlepší dosah.
                    </Text>
                  </Alert>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* TROUBLESHOOTING Section */}
              <Box>
                <SectionHeader id="troubleshooting" icon={FaBug} title="Řešení problémů" />
                <VStack align="stretch" spacing={6} mb={6}>
                  <Accordion allowMultiple>
                    <AccordionItem borderColor={borderColor}>
                      <h3>
                        <AccordionButton>
                          <HStack flex="1" textAlign="left" fontWeight="semibold">
                            <Icon as={FaExclamationTriangle} boxSize={4} />
                            <Text>E-maily se neodesílají</Text>
                          </HStack>
                          <AccordionIcon />
                        </AccordionButton>
                      </h3>
                      <AccordionPanel pb={4}>
                        <OrderedList spacing={2} pl={5}>
                          <ListItem>
                            Zkontrolujte SMTP nastavení v{' '}
                            <Link href="/admin/nastaveni" color="blue.600">
                              Nastavení
                            </Link>
                          </ListItem>
                          <ListItem>
                            Ověřte port: 465 = SSL, 587 = STARTTLS
                          </ListItem>
                          <ListItem>
                            Gmail vyžaduje „App Password", ne běžné heslo
                          </ListItem>
                          <ListItem>
                            Zkuste odeslat testovací e-mail z Newsletteru
                          </ListItem>
                          <ListItem>
                            Zkontrolujte serverové logy pro chybové hlášky
                          </ListItem>
                        </OrderedList>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem borderColor={borderColor}>
                      <h3>
                        <AccordionButton>
                          <HStack flex="1" textAlign="left" fontWeight="semibold">
                            <Icon as={FaImage} boxSize={4} />
                            <Text>Obrázky se nezobrazují</Text>
                          </HStack>
                          <AccordionIcon />
                        </AccordionButton>
                      </h3>
                      <AccordionPanel pb={4}>
                        <List spacing={2} styleType="disc" pl={5}>
                          <ListItem>
                            Nahrajte obrázek do{' '}
                            <Link href="/admin/soubory" color="blue.600">
                              Média
                            </Link>
                          </ListItem>
                          <ListItem>
                            Použijte relativní cestu: <Code>/uploads/2025/01/obrazek.jpg</Code>
                          </ListItem>
                          <ListItem>
                            Pro externí zdroje použijte proxy: <Code>/api/v1/proxy/image?url=...</Code>
                          </ListItem>
                          <ListItem>
                            Zkontrolujte, že soubor existuje a je veřejně přístupný
                          </ListItem>
                        </List>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem borderColor={borderColor}>
                      <h3>
                        <AccordionButton>
                          <HStack flex="1" textAlign="left" fontWeight="semibold">
                            <Icon as={FaFutbol} boxSize={4} />
                            <Text>FAČR data nejsou aktuální</Text>
                          </HStack>
                          <AccordionIcon />
                        </AccordionButton>
                      </h3>
                      <AccordionPanel pb={4}>
                        <OrderedList spacing={2} pl={5}>
                          <ListItem>
                            Spusťte{' '}
                            <Link href="/admin/prefetch" color="blue.600">
                              Prefetch
                            </Link>{' '}
                            ručně
                          </ListItem>
                          <ListItem>Zkontrolujte Club ID a Club Type v Nastavení</ListItem>
                          <ListItem>
                            Ověřte čas posledního běhu v Prefetch statusu
                          </ListItem>
                          <ListItem>
                            Zkontrolujte internetové připojení serveru
                          </ListItem>
                        </OrderedList>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem borderColor={borderColor}>
                      <h3>
                        <AccordionButton>
                          <HStack flex="1" textAlign="left" fontWeight="semibold">
                            <Icon as={FaKey} boxSize={4} />
                            <Text>Nelze se přihlásit</Text>
                          </HStack>
                          <AccordionIcon />
                        </AccordionButton>
                      </h3>
                      <AccordionPanel pb={4}>
                        <List spacing={2} styleType="disc" pl={5}>
                          <ListItem>
                            Ověřte e-mail a heslo (hesla jsou case-sensitive)
                          </ListItem>
                          <ListItem>
                            Použijte „Zapomenuté heslo" pro reset
                          </ListItem>
                          <ListItem>
                            Zkontrolujte, že účet má roli <Code>admin</Code>
                          </ListItem>
                          <ListItem>
                            Vyčkejte 5 minut po několika neúspěšných pokusech (ochrana proti brute-force)
                          </ListItem>
                        </List>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>

                  <Box
                    p={5}
                    bg={useColorModeValue('green.50', 'green.900')}
                    borderRadius="lg"
                    borderWidth="2px"
                    borderColor={useColorModeValue('green.300', 'green.600')}
                  >
                    <HStack spacing={2} mb={3}>
                      <Icon as={FaLifeRing} color="green.600" boxSize={5} />
                      <Text fontWeight="bold" color={useColorModeValue('green.800', 'green.200')} fontSize="lg">
                        Potřebujete pomoc?
                      </Text>
                    </HStack>
                    <Text fontSize="sm" color={useColorModeValue('green.700', 'green.200')} mb={3}>
                      Pokud problém přetrvává nebo si nevíte rady, zkuste nejprve tyto kroky:
                    </Text>
                    <List spacing={2} styleType="disc" pl={5} fontSize="sm" color={useColorModeValue('green.700', 'green.200')} mb={4}>
                      <ListItem>Vymažte cache (mezipaměť) prohlížeče a obnovte stránku (Ctrl+F5)</ListItem>
                      <ListItem>Zkuste jiný prohlížeč (Chrome, Firefox, Edge)</ListItem>
                      <ListItem>Odhlaste se a přihlaste znovu</ListItem>
                      <ListItem>Zkontrolujte internetové připojení</ListItem>
                    </List>
                    <Divider borderColor={useColorModeValue('green.300', 'green.600')} mb={3} />
                    <HStack spacing={2} mb={2}>
                      <Icon as={FaEnvelope} color={useColorModeValue('green.600', 'green.300')} boxSize={4} />
                      <Text fontSize="md" fontWeight="bold" color={useColorModeValue('green.800', 'green.100')}>
                        Stále nefunguje? Ozvěte se nám!
                      </Text>
                    </HStack>
                    <Text fontSize="sm" color={useColorModeValue('green.700', 'green.200')} mb={2}>
                      Napište nám na{' '}
                      <Link href="mailto:help@tdvorak.dev" color="green.600" fontWeight="bold" fontSize="md">
                        help@tdvorak.dev
                      </Link>
                      {' '}a popište problém. Odpovídáme do 24 hodin a rádi vám pomůžeme!
                    </Text>
                    <Text fontSize="xs" color={useColorModeValue('green.600', 'green.300')} fontStyle="italic">
                      Tip: Do e-mailu přiložte screenshot problému, urychlíte tím řešení.
                    </Text>
                  </Box>
                </VStack>
                <Link href="#top" color="blue.600" fontSize="sm">
                  <HStack as="span" spacing={1}>
                    <Icon as={FaArrowUp} boxSize={3} />
                    <Text>Zpět na začátek</Text>
                  </HStack>
                </Link>
              </Box>

              <Divider my={8} />

              {/* SUPPORT SECTION */}
              <Box
                p={6}
                bg={useColorModeValue('purple.50', 'purple.900')}
                borderRadius="xl"
                borderWidth="2px"
                borderColor={useColorModeValue('purple.200', 'purple.700')}
                textAlign="center"
                mb={6}
              >
                <Icon as={FaEnvelope} boxSize={12} color="purple.500" mb={3} />
                <Heading size="lg" mb={3} color={useColorModeValue('purple.800', 'purple.200')}>
                  Potřebujete pomoc?
                </Heading>
                <Text fontSize="md" mb={4} color={useColorModeValue('purple.700', 'purple.300')}>
                  Máte dotazy, narazili jste na problém nebo hledáte vlastní úpravy a rozšíření systému?
                </Text>
                <VStack spacing={3}>
                  <Box>
                    <HStack spacing={2} justify="center" mb={2}>
                      <Icon as={FaEnvelope} color="purple.600" boxSize={5} />
                      <Text fontWeight="bold" fontSize="lg" color={useColorModeValue('purple.900', 'purple.100')}>
                        Technická podpora
                      </Text>
                    </HStack>
                    <Link 
                      href="mailto:help@tdvorak.dev" 
                      fontSize="xl" 
                      color="purple.600" 
                      fontWeight="bold"
                      _hover={{ color: 'purple.700', textDecoration: 'underline' }}
                    >
                      help@tdvorak.dev
                    </Link>
                    <Text fontSize="sm" color={useColorModeValue('purple.600', 'purple.400')} mt={1}>
                      Odpovídáme do 24 hodin
                    </Text>
                  </Box>
                  <Divider borderColor={useColorModeValue('purple.300', 'purple.600')} />
                  <Box>
                    <HStack spacing={2} justify="center" mb={2}>
                      <Icon as={FaLightbulb} color="purple.600" boxSize={4} />
                      <Text fontWeight="bold" fontSize="md" color={useColorModeValue('purple.900', 'purple.100')}>
                        Vlastní úpravy a implementace
                      </Text>
                    </HStack>
                    <Text fontSize="sm" color={useColorModeValue('purple.700', 'purple.300')}>
                      Chcete přidat nové funkce nebo přizpůsobit systém vašim specifickým potřebám?<br />
                      Kontaktujte nás a společně zjistíme, zda je vaše představa realizovatelná.<br />
                      <strong>Rádi vám pomůžeme rozšířit systém dle vašich požadavků!</strong>
                    </Text>
                  </Box>
                </VStack>
              </Box>

              {/* FOOTER */}
              <Box textAlign="center" py={6} color="gray.500">
                <HStack spacing={2} justify="center">
                  <Icon as={FaBookOpen} color="gray.500" boxSize={4} />
                  <Text fontSize="sm" fontWeight="medium">
                    Dokumentace administračního systému • Verze 1.0
                  </Text>
                </HStack>
                <Text fontSize="xs" mt={1}>
                  Poslední aktualizace: {new Date().toLocaleDateString('cs-CZ')}
                </Text>
                <Text fontSize="xs" mt={3} color="gray.400">
                  Vytvořeno pro snadnou správu klubových webů • Žádné technické znalosti nejsou nutné
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default AdminDocsPage;
