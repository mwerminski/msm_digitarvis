
'use client';
import { AppShell, Burger, Group, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image'
import classes from './MobileNavbar.module.css';


export default function Contact() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>

          <Image src={`/logo.png`} alt="digitarvis logo" width="128" height="128" />
            <Group ml="xl" gap={0} visibleFrom="sm">
              <UnstyledButton className={classes.control}>About us</UnstyledButton>
              <UnstyledButton className={classes.control}>Project</UnstyledButton>
              <UnstyledButton className={classes.control}>Contact</UnstyledButton>
              <UnstyledButton className={classes.control}>Partners</UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton className={classes.control}>About</UnstyledButton>
        <UnstyledButton className={classes.control}>Project</UnstyledButton>
        <UnstyledButton className={classes.control}>Contact</UnstyledButton>
        <UnstyledButton className={classes.control}>Partners</UnstyledButton>
      </AppShell.Navbar>

      <AppShell.Main>
        Blep
      </AppShell.Main>
    </AppShell>
  );
}