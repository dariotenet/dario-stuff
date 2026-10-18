import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  imports: [],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  certificados = [
    {
      titulo: 'AWS Academy Graduate - Cloud Foundations',
      emisor: 'AWS Academy',
      fecha: '2026',
      archivo: 'assets/certificados/aws-cloud-foundations.pdf'
    },
    {
      titulo: 'AWS Academy Graduate - Cloud Security Foundations',
      emisor: 'AWS Academy',
      fecha: '2026',
      archivo: 'assets/certificados/aws-cloud-security-foundations.pdf'
    },
    {
      titulo: 'AWS Academy Graduate - Cloud Operations',
      emisor: 'AWS Academy',
      fecha: '2026',
      archivo: 'assets/certificados/aws-cloud-operations.pdf'
    },
    {
      titulo: 'Mendix Rapid Developer Certification',
      emisor: 'Mendix',
      fecha: '2026',
      archivo: 'assets/certificados/MendixRapidDeveloperCertification-109974.pdf_FirstPage.pdf'
    },
    {
      titulo: 'Automated Testing. NextGen',
      emisor: 'EPAM Campus',
      fecha: '2026',
      archivo: 'assets/certificados/Dario Moreno.pdf' 
    },
    {
      titulo: 'Automated Testing in Java',
      emisor: 'EPAM Campus',
      fecha: '2026',
      archivo: 'assets/certificados/Dario Moreno2.pdf' 
    },
    {
      titulo: 'Community Talk: Economía Agéntica',
      emisor: 'WayLearn Technologies',
      fecha: '2026',
      archivo: 'assets/certificados/Dario Miguel Moreno González.pdf' 
    },
    {
      titulo: 'Entornos Personales de Aprendizaje (EPA!)',
      emisor: 'Universidad Autónoma de Aguascalientes',
      fecha: '2025',
      archivo: 'assets/certificados/Certificado_MorenoGonzález.pdf'
    },
    {
      titulo: 'Concurso de Programación (Ciencias Exactas)',
      emisor: 'Universidad Autónoma de Aguascalientes',
      fecha: '2025',
      archivo: 'assets/certificados/Constancia.pdf'
    },
    {
      titulo: 'Introducción a Cisco Packet Tracer',
      emisor: 'Cisco Networking Academy',
      fecha: '2025',
      archivo: 'assets/certificados/cisco-packet-tracer.pdf'
    }
  ];
}